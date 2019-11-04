/**
 * getColumn
 * @param {matrix} a  - the matrix from which to extract the column
 * @param {integer} j - the column to extract 
 * Returns a list with the tiems of the jth column of a.
 */
function getColumn(a, j) {
    let col = [];
    for(let i = 0; i < a.length; i++) {
        col[i] = a[i][j];
    }
    return col;
}

/**
 * getTranspose
 * @param {matrix or vector} m - the matrix to transpose
 * Returns the transpose of the given matrix.
 */
function getTranspose(m) {
    let mT = [];
    for (let i = 0; i < m.length; i++) {
        mT[i] = getColumn(m, i);
    }
    return mT;
}

/**
 * vectorProductV1T
 * @param {vector} v1 - the first vector, will be transpose
 * @param {vector} v2 - the second vector, will not be transposed
 * Returns a square matrix of the multiplied vectors.
 */
function innerProduct(v1, v2) {
    if (v1.length != v2.length) {
        console.log("tried to multiply vectors of different lengths");
        return;
    }
    let m = [];
    for (let i = 0; i < v1.length; i++) {
        let m_row = [];
        for (let j = 0; j < v2.length; j++) {
            m_row[j] = v1[i] * v2[j];
        }
        m[i] = m_row;
    }
    return m;
}

/**
 * scaleMatrix
 * @param {matrix} m - the matrix to scale
 * @param {number} c - the number to multiply each item in the matrix by
 * Returns a new matrix with each entry multiplied by c
 */
function scaleMatrix(m, c) {
    let a = [];
    for (let i = 0; i < m.length; i++) {
        a[i] = m[i]
        for (let j = 0; j < m[i].length; j++) {
            a[i][j] *= c;
        }
    }
    return a;
}
/**
 * dotProduct
 * @param {vector} v1 - the first vector, will not be transpose
 * @param {vector} v2 - the second vector, will be transposed
 * Returns a scalar of the multiplied vectors.
 */
function dotProduct(v1, v2) {
    if (v1.length != v2.length) {
        console.log("tried to multiply vectors of different lengths");
        return;
    }
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

/**
 * dotProduct
 * @param {matrix} a - the left matrix operand
 * @param {matrix} b - the right matrix operand
 * Returns the product of the two matrices.
 */
function matrixMultiply(a, b) {
    if (a[0].length != b.length) {
        console.log("tried to multiply matrices with invalid dimensions");
        return;
    }
    let product = [];
    for (let i = 0; i < a.length; i++) {
        let product_row = []
        for (let j = 0; j < a[0].length; j++) {
            product_row[j] = dotProduct(a[i], getColumn(b, j));
        }
        product[i] = product_row;
    }
    return product;
}

/**
 * matrixVectorMultiply
 * @param {matrix} m - the matrix to multiply
 * @param {vector} v - the vector to multiply
 * Returns a the product of m x v.
 */
function matrixVectorMultiply(m, v) {
    if (m[0].length != v.length) {
        console.log("tried to multiply a matrix with a vector with invalid dimensions");
        return;
    }
    let product = [];
    for (let i = 0; i < m.length; i++) {
        product[i] = dotProduct(m[i], v);
    }
    return product;
}
/**
 * vectorDivideByScalar
 * @param {vector} v - the vector to divide
 * @param {number} c - the constant to divide by
 * Returns the vector with each element divided by the scalar
 */
function vectorDivideByScalar(v, c) {
    for (let i = 0; i < v.length; i++)
        v[i] /= c;
    return v;
}

/**
 * matrixMinusMatrix
 * @param {matrix} a - the matrix to subtract from
 * @param {matrix} b - the matrix to subtract by
 * Returns the matrix produced by subtracting b from a
 */
function matrixMinusMatrix(a, b) {
    if (a.length != b.length || a[0].length != b[0].length) {
        console.log("tried to subtract matrices with different dimensions");
        return;
    }
    let c = [];
    for (let i = 0; i < a.length; i++) {
        let c_row = [];
        for (let j = 0; j < a[i].length; j++) {
            c_row[j] = a[i][j] - b[i][j];
        }
        c[i] = c_row;
    }
    return c;
}
/**
 * matrixMinusVector
 * @param {matrix} a - the matrix from which to subtract
 * @param {vector} v - the vector to subtract from the matrix
 * Returns the matrix with each row having the corresponding element in v subtracted from it
 * Subtracts v from each row so the length of v must equal the length of a[i]
 */
function matrixMinusVector(a, v) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        let b_row = a[i];
        for (let j = 0; j < v.length; j++) {
            b_row[j] -= v[j];
        }
        b[i] = b_row;
    }
    return b;
}

/**
 * magnitude
 * @param {vector} v - the vector of which to find the magnitude
 * Returns the magnitude of the given vector.
 */
function magnitude(v) {
    let sum = 0;
    for(let i = 0; i < v.length; i++) {
        sum += v[i] ** 2;
    }
    return sum ** 0.5;
}

/**
 * singleMean
 * @param {vector} v - the vector of which to find the mean
 * Returns the mean of the given vector.
 */
function singleMean(v) {
    let sum = 0;
    for (let i = 0; i < v.length; i++)
        sum += v[i];
    return sum / v.length;
}

/**
 * largestCol
 * @param {matrix} x - the matrix from which to find the largest column
 * Returns the largest magnitude column of the given matrix as an array.
 */
function largestCol(x) {
    let largest_mag = magnitude(getColumn(x, 0));
    let largest_mag_col = 0;
    for(let j = 0; j < x[0].length; j++) {
        mag = magnitude(getColumn(x, j));
        if (mag > largest_mag) {
            largest_mag = mag;
            largest_mag_col = j;
        }
    }
    return x[largest_mag_col];
}

/**
 * largestRow
 * @param {matrix} x - the matrix from which to find the largest row
 * Returns the largest magnitude row of the given matrix as an array
 */
function largestRow(x) {
    let largest_mag = magnitude(x[0]);
    let largest_mag_row = 0;
    for(let i = 0; i < x[0].length; i++) {
        mag = magnitude(x[i]);
        if (mag > largest_mag) {
            largest_mag = mag;
            largest_mag_row = i;
        }
    }
    return x[largest_mag_row];
}

/**
 * singleCov
 * @param {matrix} x - the matrix containing the features
 * @param {array} x_bar - an array containing the means of each feature
 * @param {number} j - the first feature index
 * @param {number} k - the second feature index
 * Returns the covariance between the two features.
 */
function singleCov(x, x_bar, j, k,) {
    let sum = 0;
    for(let i = 0; i < x.length; i++) {
        sum += ((x[i][j] -  x_bar[j]) * (x[i][k] - x_bar[k]));
    }
    return sum * (1 / (x.length - 1));
}

class PrimaryComponentAnalysis {
    mean(x) {
        let means = [];
        for (let j = 0; j < x[0].length; j++) {
            means[j] = singleMean(getColumn(x, j));
        }
        return means;
    }
    cov(x) {
        let x_bar = this.mean(x);
        let K = [];
        for (let j = 0; j < x[0].length; j++) {
            let K_row = [];
            for(let k = 0; k < x[0].length; k++) {
                K_row[k] = singleCov(x, x_bar, j, k);
            }
            K[j] = K_row;
        }
        return K;
    }
    powerIteration(a, num_iter) {
        let v = largestRow(a);
        for (let i = 0; i < num_iter; i++) {
            v = matrixVectorMultiply(a,v);
            v = vectorDivideByScalar(v, magnitude(v));
        }
        return [v, (dotProduct(matrixVectorMultiply(a, v), v) / dotProduct(v,v))];
    }
        
    eig(a, num_components, num_iter) {
        let w = [];
        let d = [];
        for (let i = 0; i < num_components; i++) {
            let powerResult = this.powerIteration(a, num_iter);
            d[i] = powerResult[1];
            w[i] = powerResult[0];
            a = matrixMinusMatrix(a, scaleMatrix(innerProduct(powerResult[0], powerResult[0]), powerResult[1]));
        }
        return [getTranspose(w), d];
    }
    pca(x, num_components, num_iter) {
        let wd = this.eig(this.cov(x), num_components, num_iter)
        return matrixMultiply(matrixMinusVector(x, this.mean(x)), wd[0])
    }
}

class infoPage {
    constructor() {
        this.state = {
            title : "Covariance Matrices",
            introSection : {
                title : "A generic matrix, X, and it's covariance matrix, &Sigma;",
                xMatrixSection : {
                     genericXMatrix : [["x_1^2", "x_{12}", "x_{13}"],
                                        ["x_{21}", "x_2^2", "x_{23}"],
                                        ["x_{31}", "x_{32}", "x_3^2"]],
                    explanationHeader : "What is X?",
                    explanation : [
                        "X is a matrix of course",
                        "Think about the rows as samples of data",
                        "Think about the columns as features of each sample",
                        "For Example",
                        [ 
                            "Each row could be a student",
                            "Column 1 could be SAT score",
                            "Column 2 could be GPS",
                            "etc"
                        ]
                    ]
                },
                covMatrixSection : {
                    singleCovFormula : "\\[\\sigma_{jk}=\\frac{1}{n}\\sum_{i=1}^n\\left(x_j^{(i)}-\\mu_{j}\\right)\\left(x_k^{(i)}-\\mu_{k}\\right)\\]",
                    genericCovMatrix : [["\\sigma_1^2", "\\sigma_{12}", "\\sigma_{13}"],
                                        ["\\sigma_{21}", "\\sigma_2^2", "\\sigma_{23}"],
                                        ["\\sigma_{31}", "\\sigma_{32}", "\\sigma_3^2"]],
                    explanationHeader : "What is &Sigma;?",
                    explanation : [
                        "First, it's not the summation symbol. Don't get them confused.",
                        "&Sigma; (pronounced sigma) is the covariance matrix for X.",
                        "Each element in it represents the variation between two columns (features) of X",
                    ]
                }
            },
            playgroundSection : {
                pca : new PrimaryComponentAnalysis(),
                inputSection : {
                    xName : "X",
                    x : [[1, 5, 2], [3, 6, -2], [4, -9, 0]]
                },
                resultSection : {
                    xName : "&Sigma;",
                    x : [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
                }
            }
        };
        
    }
    makeIntroSection(introSectionData) {
        let introHeading = "<h2 id='introHeading>" + introSectionData.title + "</h2>";
        let introContent = "<section id='introContent'>";
        introContent += this.makeXMatrixSection(introSectionData.xMatrixSection);
        introContent += this.makeCovMatrixSection(introSectionData.covMatrixSection);
        let introSection = "<section id='introSection'>";
        introSection += introHeading;
        introSection += introContent;
        introSection += "</section>";
        return introSection;
    }
    makeCovMatrixSection(covMatrixSectionData) {
        let matrixImage = "<div class='matrixImage>";
        matrixImage += this.getMatrix(covMatrixSectionData.genericCovMatrix, "\\Sigma_X");
        matrixImage += "</div>";

        let matrixExplanation = "<div class='explanation'>";
            let matrixExplanationHeader = "<h3 class='explanationHeader'>";
            matrixExplanationHeader += covMatrixSectionData.explanationHeader;
            matrixExplanationHeader += "</h3>"
            let matrixExplanationContent = this.createNestedList(covMatrixSectionData.explanation);
            
            matrixExplanation += matrixExplanationHeader);
            matrixExplanation +trixExplanation.appendChild(covMatrixExplanationContent);

        let covMatrixSection = "div id='covMatrixSection' class='introContent'>";
        covMatrixSection += matrixImage;
        covMatrixSection += matrixExplanation;
        return covMatrixSection;
    }
    makeXMatrixSection(xMatrixSectionData) {
        let xMatrixSection = document.createElement('article');
        xMatrixSection.setAttribute('id', 'xMatrixSection');
        xMatrixSection.setAttribute('class', 'introContent');

        let matrixImage = document.createElement('div');
        matrixImage.setAttribute('class', 'matrixImage');
        matrixImage.appendChild(document.createTextNode(this.getMatrix(xMatrixSectionData.genericXMatrix, "X")));

        let xMatrixExplanation = document.createElement('div');
        xMatrixExplanation.setAttribute('class', 'explanation');

            let xMatrixExplanationHeader = document.createElement('h3');
            xMatrixExplanationHeader.setAttribute('class', 'explanationHeader');
            xMatrixExplanationHeader.innerHTML = xMatrixSectionData.explanationHeader;

            let xMatrixExplanationContent = this.createNestedList(xMatrixSectionData.explanation);
            xMatrixExplanationContent.setAttribute('class', 'explanationContent');

            xMatrixExplanation.appendChild(xMatrixExplanationHeader);
            xMatrixExplanation.appendChild(xMatrixExplanationContent);

        xMatrixSection.appendChild(matrixImage);
        xMatrixSection.appendChild(xMatrixExplanation)
        return xMatrixSection;
    }
    makePlayground(playgroundData) {
        let playground = document.createElement('section');
        playground.setAttribute('id', 'playground');

        playground.appendChild(this.makeInputMatrix(playgroundData.inputSection));
        playground.appendChild(this.makeResultMatrix(playgroundData.resultSection));
        return playground;
    }
    makeInputMatrix(matrixData) {
        let inputMatrix = document.createElement('div');
        inputMatrix.setAttribute('id', 'inputMatrix');
        inputMatrix.setAttribute('class', 'playgroundMatrix');

        let inputMatrixTitle = document.createElement('dix');
        inputMatrixTitle.setAttribute('class', 'matrixTitle');
        inputMatrixTitle.innerHTML = matrixData.xName + " = ";
        
        inputMatrix.appendChild(inputMatrixTitle);
        for (let i = 0; i < matrixData.x.length; i++) {
            let inputWrapper = document.createElement('div');
            inputWrapper.setAttribute('class', 'inputWrapper');
            for (let j = 0; j < matrixData.x[i].length; j++) {
                let inputItem = document.createElement('input');
                inputItem.setAttribute('type', 'number');
                inputItem.setAttribute('id', 'input' + i + j);
                inputItem.setAttribute('class', 'matrixEntry');
                inputItem.onchange = (event) => {reloadResultMatrix(event)};
                inputItem.setAttribute('value', matrixData.x[i][j]);
                inputWrapper.appendChild(inputItem);
            }
            inputMatrix.appendChild(inputWrapper);
        }
        return inputMatrix;
    }
    makeResultMatrix(matrixData) {
        this.updateResultMatrix();
        let resultMatrix = document.createElement('div');
        resultMatrix.setAttribute('id', 'resultMatrix');
        resultMatrix.setAttribute('class', 'playgroundMatrix');
        resultMatrix.innerHTML = this.getResultMatrix(matrixData);
        return resultMatrix;
    }
    loadPage() {
        // create header 
        let header = document.createElement('h1');
        header.appendChild(document.createTextNode(this.state.title));
        document.body.appendChild(header);
        document.body.appendChild(this.makeIntroSection(this.state.introSection));
        document.body.appendChild(this.makePlayground(this.state.playgroundSection));
    }
    createNestedList(list) {
        let head = document.createElement('ul');
        for (let i = 0; i < list.length; i++) {
            let listElement = document.createElement('li');
            if (list[i] instanceof Array) {
                listElement.appendChild(this.createNestedList(list[i]));
            } else {
                listElement.innerHTML = list[i];
            }
            head.appendChild(listElement);
        }
        return head;
    }
    getMatrix(x, name) {
        let line = "\\[" + name + "=\\begin{bmatrix}";
        for (let i = 0; i < x.length; i++) {
            if (i != 0) {
                line += " \\\\";
            }
            for (let j = 0; j < x[i].length; j++) {
                if (j != 0) {
                    line += " & "
                }
                line += x[i][j];
            }
        }
        line += "\\end{bmatrix}\\]";
        return line;
    }
    updateResultMatrix() {
        this.state.playgroundSection.resultSection.x = 
            this.roundMatrix(
                this.state.playgroundSection.pca.pca(
                    this.state.playgroundSection.inputSection.x,
                    3,
                    1000
                )
            );
    }
    roundMatrix(m) {
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[i].length; j++) {
                m[i][j] = Math.round(m[i][j] * 100) / 100;
            }
        }
        return m;
    }
    getResultMatrix(matrixData) {
        let resultMatrix = "";
        let resultMatrixTitle = "<div class='matrixTitle'>" + matrixData.xName + " = </div>";
        resultMatrix += resultMatrixTitle;
        for (let i = 0; i < matrixData.x.length; i++) {
            resultMatrix += "<div class='inputWrapper'>";
            for (let j = 0; j < matrixData.x[i].length; j++) {
                resultMatrix += "<input type='number' class='matrixEntry', value='" + matrixData.x[i][j] + "'>";
            }
            resultMatrix += "</div>"
        }
        return resultMatrix;
    }
    reloadResultMatrix(event) {
        this.updateInputMatrix(event.target);
        this.updateResultMatrix();
        document.getElementById('resultMatrix').innerHTML = this.getResultMatrix(this.state.playgroundSection.resultSection);
    }
    updateInputMatrix(changedElement) {
        let newNumber = changedElement.value;
        let i = Number(changedElement.id.charAt(changedElement.id.length - 1));
        let j = Number(changedElement.id.charAt(changedElement.id.length - 2));
        this.state.playgroundSection.inputSection.x[i][j] = newNumber;
    }
}
let page = new infoPage();
page.loadPage();

function reloadResultMatrix(event) {
    page.reloadResultMatrix(event);
    console.log("reloaded result matrix");
}
let pca = new PrimaryComponentAnalysis();
let x = [[1, 5, -3], [24,-5,6], [-1,5,9]];
console.log(pca.cov(x));
/* CONTENT OUTLINE
All matrices have a constructing the covariance matrix. 
The symmetrix dxd dimensional covariance matrix, where d is the number of dimensions in the dataset, stores the pairwise covariances between the different features

X Matrix
What is X?



 */