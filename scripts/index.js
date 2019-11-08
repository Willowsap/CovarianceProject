const irisDataset = [
    [5.1,3.5,1.4,0.2],
    [4.9,3.0,1.4,0.2],
    [4.7,3.2,1.3,0.2],
    [4.6,3.1,1.5,0.2],
    [5.0,3.6,1.4,0.2],
    [5.4,3.9,1.7,0.4],
    [4.6,3.4,1.4,0.3],
    [5.0,3.4,1.5,0.2],
    [4.4,2.9,1.4,0.2],
    [4.9,3.1,1.5,0.1],
    [5.4,3.7,1.5,0.2],
    [4.8,3.4,1.6,0.2],
    [4.8,3.0,1.4,0.1],
    [4.3,3.0,1.1,0.1],
    [5.8,4.0,1.2,0.2],
    [5.7,4.4,1.5,0.4],
    [5.4,3.9,1.3,0.4],
    [5.1,3.5,1.4,0.3],
    [5.7,3.8,1.7,0.3],
    [5.1,3.8,1.5,0.3],
    [5.4,3.4,1.7,0.2],
    [5.1,3.7,1.5,0.4],
    [4.6,3.6,1.0,0.2],
    [5.1,3.3,1.7,0.5],
    [4.8,3.4,1.9,0.2],
    [5.0,3.0,1.6,0.2],
    [5.0,3.4,1.6,0.4],
    [5.2,3.5,1.5,0.2],
    [5.2,3.4,1.4,0.2],
    [4.7,3.2,1.6,0.2],
    [4.8,3.1,1.6,0.2],
    [5.4,3.4,1.5,0.4],
    [5.2,4.1,1.5,0.1],
    [5.5,4.2,1.4,0.2],
    [4.9,3.1,1.5,0.1],
    [5.0,3.2,1.2,0.2],
    [5.5,3.5,1.3,0.2],
    [4.9,3.1,1.5,0.1],
    [4.4,3.0,1.3,0.2],
    [5.1,3.4,1.5,0.2],
    [5.0,3.5,1.3,0.3],
    [4.5,2.3,1.3,0.3],
    [4.4,3.2,1.3,0.2],
    [5.0,3.5,1.6,0.6],
    [5.1,3.8,1.9,0.4],
    [4.8,3.0,1.4,0.3],
    [5.1,3.8,1.6,0.2],
    [4.6,3.2,1.4,0.2],
    [5.3,3.7,1.5,0.2],
    [5.0,3.3,1.4,0.2],
    [7.0,3.2,4.7,1.4],
    [6.4,3.2,4.5,1.5],
    [6.9,3.1,4.9,1.5],
    [5.5,2.3,4.0,1.3],
    [6.5,2.8,4.6,1.5],
    [5.7,2.8,4.5,1.3],
    [6.3,3.3,4.7,1.6],
    [4.9,2.4,3.3,1.0],
    [6.6,2.9,4.6,1.3],
    [5.2,2.7,3.9,1.4],
    [5.0,2.0,3.5,1.0],
    [5.9,3.0,4.2,1.5],
    [6.0,2.2,4.0,1.0],
    [6.1,2.9,4.7,1.4],
    [5.6,2.9,3.6,1.3],
    [6.7,3.1,4.4,1.4],
    [5.6,3.0,4.5,1.5],
    [5.8,2.7,4.1,1.0],
    [6.2,2.2,4.5,1.5],
    [5.6,2.5,3.9,1.1],
    [5.9,3.2,4.8,1.8],
    [6.1,2.8,4.0,1.3],
    [6.3,2.5,4.9,1.5],
    [6.1,2.8,4.7,1.2],
    [6.4,2.9,4.3,1.3],
    [6.6,3.0,4.4,1.4],
    [6.8,2.8,4.8,1.4],
    [6.7,3.0,5.0,1.7],
    [6.0,2.9,4.5,1.5],
    [5.7,2.6,3.5,1.0],
    [5.5,2.4,3.8,1.1],
    [5.5,2.4,3.7,1.0],
    [5.8,2.7,3.9,1.2],
    [6.0,2.7,5.1,1.6],
    [5.4,3.0,4.5,1.5],
    [6.0,3.4,4.5,1.6],
    [6.7,3.1,4.7,1.5],
    [6.3,2.3,4.4,1.3],
    [5.6,3.0,4.1,1.3],
    [5.5,2.5,4.0,1.3],
    [5.5,2.6,4.4,1.2],
    [6.1,3.0,4.6,1.4],
    [5.8,2.6,4.0,1.2],
    [5.0,2.3,3.3,1.0],
    [5.6,2.7,4.2,1.3],
    [5.7,3.0,4.2,1.2],
    [5.7,2.9,4.2,1.3],
    [6.2,2.9,4.3,1.3],
    [5.1,2.5,3.0,1.1],
    [5.7,2.8,4.1,1.3],
    [6.3,3.3,6.0,2.5],
    [5.8,2.7,5.1,1.9],
    [7.1,3.0,5.9,2.1],
    [6.3,2.9,5.6,1.8],
    [6.5,3.0,5.8,2.2],
    [7.6,3.0,6.6,2.1],
    [4.9,2.5,4.5,1.7],
    [7.3,2.9,6.3,1.8],
    [6.7,2.5,5.8,1.8],
    [7.2,3.6,6.1,2.5],
    [6.5,3.2,5.1,2.0],
    [6.4,2.7,5.3,1.9],
    [6.8,3.0,5.5,2.1],
    [5.7,2.5,5.0,2.0],
    [5.8,2.8,5.1,2.4],
    [6.4,3.2,5.3,2.3],
    [6.5,3.0,5.5,1.8],
    [7.7,3.8,6.7,2.2],
    [7.7,2.6,6.9,2.3],
    [6.0,2.2,5.0,1.5],
    [6.9,3.2,5.7,2.3],
    [5.6,2.8,4.9,2.0],
    [7.7,2.8,6.7,2.0],
    [6.3,2.7,4.9,1.8],
    [6.7,3.3,5.7,2.1],
    [7.2,3.2,6.0,1.8],
    [6.2,2.8,4.8,1.8],
    [6.1,3.0,4.9,1.8],
    [6.4,2.8,5.6,2.1],
    [7.2,3.0,5.8,1.6],
    [7.4,2.8,6.1,1.9],
    [7.9,3.8,6.4,2.0],
    [6.4,2.8,5.6,2.2],
    [6.3,2.8,5.1,1.5],
    [6.1,2.6,5.6,1.4],
    [7.7,3.0,6.1,2.3],
    [6.3,3.4,5.6,2.4],
    [6.4,3.1,5.5,1.8],
    [6.0,3.0,4.8,1.8],
    [6.9,3.1,5.4,2.1],
    [6.7,3.1,5.6,2.4],
    [6.9,3.1,5.1,2.3],
    [5.8,2.7,5.1,1.9],
    [6.8,3.2,5.9,2.3],
    [6.7,3.3,5.7,2.5],
    [6.7,3.0,5.2,2.3],
    [6.3,2.5,5.0,1.9],
    [6.5,3.0,5.2,2.0],
    [6.2,3.4,5.4,2.3],
    [5.9,3.0,5.1,1.8]
];
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
    for (let i = 0; i < m[0].length; i++) {
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
        for (let j = 0; j < b[0].length; j++) {
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
        for (let j = 0; j < a[i].length; j++) {
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
function roundMatrix(m) {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            m[i][j] = Math.round(m[i][j] * 100) / 100;
        }
    }
    return m;
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
            pca : new PrimaryComponentAnalysis(),
            introContent : {
                title : "Play with a Covariance Matrix",
                matrix : irisDataset
            }
        };
        
    }
    getIntroSection(introContent) {
        let introSection = document.createElement('section');
            introSection.setAttribute('id', 'introSection');
        let introTitle = document.createElement('h2');
            introTitle.setAttribute('class', 'introHeader');
            introTitle.appendChild(document.createTextNode(introContent.title));
        let introMatricesWrapper = document.createElement('div');
            introMatricesWrapper.setAttribute('id', 'introMatricesWrapper');
            let inputMatrixWrapper = document.createElement('div');
            inputMatrixWrapper.setAttribute('id', 'inputMatrixWrapper');
            inputMatrixWrapper.appendChild(this.createInputMatrix(roundMatrix(introContent.matrix), "X", false));
            let mathCovMatrix = document.createElement('div');
                let sigmaMatrix = this.createInputMatrix(roundMatrix(this.state.pca.cov(introContent.matrix)), "&Sigma;", true);
                mathCovMatrix.setAttribute('class', 'mathMatrix');
                mathCovMatrix.setAttribute('id', 'mathCovMatrix');
                mathCovMatrix.appendChild(sigmaMatrix);

            introMatricesWrapper.appendChild(inputMatrixWrapper);
            introMatricesWrapper.appendChild(mathCovMatrix);

        introSection.appendChild(introTitle);
        introSection.appendChild(introMatricesWrapper);

        return { section : "sectionA", content : introSection};
    }
    loadPage() {
        // create header 
        document.getElementById("pageHeader").innerHTML = this.state.title;
        let intro = this.getIntroSection(this.state.introContent);
        document.getElementById(intro.section).appendChild(intro.content);
    }
    createInputMatrix(matrix, title, disabled) {
        let inputWrapper = document.createElement('div');
        inputWrapper.setAttribute('class', 'matrixWrapper');

        let matrixTitle = document.createElement('div');
        matrixTitle.setAttribute('class', 'matrixTitle');
        matrixTitle.innerHTML = title + " = ";

        let inputMatrix = document.createElement('div');
        inputMatrix.setAttribute('id', 'inputMatrix');
        inputMatrix.setAttribute('class', 'matrix');
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length + 2; j++) {
                if (j == 0 || j == matrix[i].length + 1) {                    
                    let inputItem = document.createElement('div');
                    inputItem.setAttribute('class', 'matrixEntry');
                    if (i == 0) inputItem.style.borderTopWidth = "2px";
                    if (i == matrix.length - 1) inputItem.style.borderBottomWidth = "2px";
                    if (j == 0) inputItem.style.borderLeftWidth = "2px";
                    if (j == matrix[i].length + 1) inputItem.style.borderRightWidth = "2px";
                    inputMatrix.appendChild(inputItem);
                } else {
                    let inputItem = document.createElement('input');
                    if (disabled) inputItem.setAttribute('disabled', true);
                    inputItem.setAttribute('type', 'number');
                    inputItem.setAttribute('id', 'input' + i + (j - 1));
                    inputItem.setAttribute('class', 'matrixEntry');
                    inputItem.onchange = (event) => {this.reloadResultMatrix(event)};
                    inputItem.setAttribute('value', matrix[i][j - 1]);
                    inputMatrix.appendChild(inputItem);
                }
            }
        }
        inputWrapper.appendChild(matrixTitle);
        inputWrapper.appendChild(inputMatrix);
        return inputWrapper;
    }
    reloadResultMatrix(event) {
        let row = event.target.id.charAt(event.target.id.length - 2);
        let column = event.target.id.charAt(event.target.id.length - 1);
        this.state.introContent.matrix[row][column] = Number(event.target.value);
        let newMatrix = this.createInputMatrix(roundMatrix(this.state.pca.cov(this.state.introContent.matrix)), "&Sigma;", true);
        let mathCovMatrix = document.getElementById('mathCovMatrix');
        mathCovMatrix.innerHTML = "";
        mathCovMatrix.appendChild(newMatrix);
    }
}
let page = new infoPage();
page.loadPage();
