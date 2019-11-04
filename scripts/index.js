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
                introTitle : "What is a covariance matrix?",
                introText1 : "This could be explained rather abstractly, but let's look at a concrete example." +
                                  "Imagine a data matrix X. Well, actually let's just look at one. No need to imagine",
                introDataMatrix : {
                    rowTitles : ["house 1", "house 2", "house 3"],
                    columnTitle : ["Size, Number of Bathrooms", "Number of Rooms", "Price", "Age of Owner", "Age of House"],
                    matrix : [
                        [100, 2, 6, 200000, 55, 20],
                        [200, 4, 12, 2000000, 30, 5],
                        [50, 1, 3, 400000, 45, 40],
                    ]
                },
                introText2 : "As you can see, each row of the matrix represents a house and each column represents some information about the house."
                /*
                covMatrixSection : {
                    singleCovFormula : "\\[\\sigma_{jk}=\\frac{1}{n}\\sum_{i=1}^n\\left(x_j^{(i)}-\\mu_{j}\\right)\\left(x_k^{(i)}-\\mu_{k}\\right)\\]",
                    matrix : [["\\sigma_1^2", "\\sigma_{12}", "\\sigma_{13}"],
                              ["\\sigma_{21}", "\\sigma_2^2", "\\sigma_{23}"],
                              ["\\sigma_{31}", "\\sigma_{32}", "\\sigma_3^2"]],
                    header : "What is &Sigma;?",
                    explanation : [
                        "First, it's not the summation symbol. Don't get them confused.",
                        "&Sigma; (pronounced sigma) is the covariance matrix for X.",
                        "Each element in it represents the variation between two columns (features) of X",
                    ]
                }*/
            },
            playgroundSection : {
                pca : new PrimaryComponentAnalysis(),
                inputSection : {
                    matrixName : "X",
                    matrix : [[1, 5, 2], [3, 6, -2], [4, -9, 0]]
                },
                outputSection : {
                    matrixName : "&Sigma;",
                    matrix : [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
                }
            }
        };
        
    }
    loadIntroSection(data) {
        for (let key in data) {
            document.getElementById(key).innerHTML = data[key];
        }
    }
    loadPlaygroundSection(data) {
        //document.getElementById("inputMatrixWrap").innerHTML = this.buildInputMatrix(data.inputSection);
        document.getElementById("outputMatrixWrap").innerHTML = this.buildOutputMatrix(data.outputSection);
    }
    loadPage() {
        // create header 
        document.getElementById("pageHeader").innerHTML = this.state.title;
        this.loadIntroSection(this.state.introSection);
        this.loadPlaygroundSection(this.state.playgroundSection);
    }
    buildOutputMatrix(data) {
        let matrix = "<div id='outputMatrix'>"
        //matrix += "<div class='matrixTitle'>" + data.matrixName + " = </div>";
        for (let i = 0; i < data.matrix.length; i++) {
            for (let j = 0; j < data.matrix[i].length; j++) {
                matrix += "<div class='matrixItem'>";
                matrix += data.matrix[i][j];
                matrix += "</div>";
            }
        }
        return matrix + "</div>";
    }
    buildMathMatrix(x, name) {
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
    buildList(a) {
        let list = "<ul>";
        for (let i = 0; i < a.length; i++) {
            list += "<li>";
            if (a[i] instanceof Array) {
                list += this.buildList(a[i]);
            } else {
                list += a[i];
            }
            list += "</li>";
        }
        list += "</ul>"
        return list;
    }
}
let page = new infoPage();
page.loadPage();

/* CONTENT OUTLINE
All matrices have a constructing the covariance matrix. 
The symmetrix dxd dimensional covariance matrix, where d is the number of dimensions in the dataset, stores the pairwise covariances between the different features

X Matrix
What is X?



 */