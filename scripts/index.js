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
        this.data = this.genData(100, false);
        this.pca = new PrimaryComponentAnalysis(),
        this.state = {
            title : "Dimensionality Reduction",
            beforeData : {
                title : "Gathered Data",
                matrix : JSON.parse(JSON.stringify(this.data))
            },
            afterData : {
                title : "Processed Data",
                matrix : this.pca.pca(JSON.parse(JSON.stringify(this.data)), 2, 1000)
            },
            covData : {
                title : "Covariance Matrix",
                matrix : this.pca.cov(JSON.parse(JSON.stringify(this.data)))
            }
        };
    }
    getBeforeDataSection(info) {
        let beforeDataSection = document.createElement('section');
            beforeDataSection.setAttribute('id', 'beforeDataSection');
            beforeDataSection.setAttribute('class', 'dataSection');

        let beforeDataTitle = document.createElement('h2');
            beforeDataTitle.setAttribute('class', 'dataHeader');
            beforeDataTitle.appendChild(document.createTextNode(info.title));

        let beforeDataMatrixWrapper = document.createElement('div');
            beforeDataMatrixWrapper.setAttribute('id', 'beforeDataMatricesWrapper');
            beforeDataMatrixWrapper.setAttribute('class', 'doubleWrapper');
            beforeDataMatrixWrapper.appendChild(this.createInputMatrix(roundMatrix(info.matrix), "X", false));

        beforeDataSection.appendChild(beforeDataTitle);
        beforeDataSection.appendChild(beforeDataMatrixWrapper);

        this.plot3dMatrix(info.matrix);
        return { section : "beforeMatrix", content : beforeDataSection };
    }
    getAfterDataSection(info) {
        let afterDataSection = document.createElement('section');
            afterDataSection.setAttribute('id', 'afterDataSection');
            afterDataSection.setAttribute('class', 'dataSection');

        let afterDataTitle = document.createElement('h2');
            afterDataTitle.setAttribute('class', 'dataHeader');
            afterDataTitle.appendChild(document.createTextNode(info.title));

        let afterDataMatrixWrapper = document.createElement('div');
            afterDataMatrixWrapper.setAttribute('id', 'afterDataMatrixWrapper');
            afterDataMatrixWrapper.setAttribute('class', 'doubleWrapper');
            afterDataMatrixWrapper.appendChild(this.createInputMatrix(roundMatrix(info.matrix), "X'", true));

        afterDataSection.appendChild(afterDataTitle);
        afterDataSection.appendChild(afterDataMatrixWrapper);

        this.plot2dMatrix(info.matrix);
        return { section : "afterMatrix", content : afterDataSection };
    }
    getCovMatrixSection(info) {
        let covMatrixSection = document.createElement('section');
            covMatrixSection.setAttribute('id', 'covMatrixSection');
            covMatrixSection.setAttribute('class', 'dataSection');

        let covMatrixTitle = document.createElement('h2');
            covMatrixTitle.setAttribute('class', 'dataHeader');
            covMatrixTitle.appendChild(document.createTextNode(info.title));

        let covMatrixWrapper = document.createElement('div');
            covMatrixWrapper.setAttribute('id', 'covMatrixWrapper');
            covMatrixWrapper.setAttribute('class', 'doubleWrapper');
            covMatrixWrapper.appendChild(this.createInputMatrix(roundMatrix(info.matrix), "&Sigma;", true));

        covMatrixSection.appendChild(covMatrixTitle);
        covMatrixSection.appendChild(covMatrixWrapper);

        return { section : "covMatrix", content : covMatrixSection };
    }
    loadPage() {
        // create header 
        document.getElementById("pageHeader").innerHTML = this.state.title;
        let beforeDataSection = this.getBeforeDataSection(this.state.beforeData);
        let covMatrixSection = this.getCovMatrixSection(this.state.covData);
        let afterDataSection = this.getAfterDataSection(this.state.afterData);
        document.getElementById(beforeDataSection.section).appendChild(beforeDataSection.content);
        document.getElementById(covMatrixSection.section).appendChild(covMatrixSection.content);
        document.getElementById(afterDataSection.section).appendChild(afterDataSection.content);
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
        let cols = "0.5fr ";
        for (let n = 0; n < matrix[0].length; n++) {
            cols += "1fr ";
        }
        cols += "0.5fr";
        inputMatrix.style.gridTemplateColumns = cols;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length + 2; j++) {
                if (j == 0 || j == matrix[i].length + 1) {                    
                    let inputItem = document.createElement('div');
                    inputItem.setAttribute('class', 'matrixEntry');
                    inputItem.style.width = "10px";
                    inputItem.style.heigh = "100%";
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

        this.state.beforeData.matrix[row][column] = Number(event.target.value);
        this.state.covData.matrix = this.pca.cov(JSON.parse(JSON.stringify(this.state.beforeData.matrix)));
        this.state.afterData.matrix = this.pca.pca(JSON.parse(JSON.stringify(this.state.beforeData.matrix)), 2, 10);

        let covMatrixSection = this.getCovMatrixSection(this.state.covData);
        let afterDataSection = this.getAfterDataSection(this.state.afterData);
        let covMatrixNode = document.getElementById(covMatrixSection.section);
        covMatrixNode.removeChild(covMatrixNode.firstElementChild);
        covMatrixNode.appendChild(covMatrixSection.content);
        let afterMatrixNode = document.getElementById(afterDataSection.section);
        afterMatrixNode.removeChild(afterMatrixNode.firstElementChild);
        afterMatrixNode.appendChild(afterDataSection.content);
        this.plot3dMatrix(this.state.beforeData.matrix);
    }
    genData(numSamples, perfect) {
        let data = [];
        for (let i = 0; i < numSamples; i++) {
            let studying = Math.floor((Math.random() * 10));
            let coffee = Math.floor((Math.random() * 10));
            let grade = ((studying*2 + coffee*2) + 60) * (perfect ? ((Math.random() * .4) + .7) : 1);
            let sample = [grade, coffee, studying];
            data.push(sample);
        }
        return data;
    }
    plot3dMatrix(matrix) {
        let trace1 = {
            x: getColumn(matrix, 0), 
            y: getColumn(matrix, 1),
            z: getColumn(matrix, 2), 
            mode: 'markers',
                marker: {
                size: 12,
                line: {
                    color: 'rgba(217, 217, 217, 0.14)',
                    width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter3d'
        };
        let graphData = [trace1];
        let layout = {
            paper_bgcolor: "lavender",
            dragmode: false,
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0
            },
            scene: {
                aspectmode:'cube',
                xaxis:{
                    title: 'Grade',
                    backgroundcolor: "rgb(200, 200, 230)",
                    gridcolor: "rgb(255, 255, 255)",
                    showbackground: true,
                    zerolinecolor: "rgb(255, 255, 255)",
                },
                yaxis:{
                    title: 'Coffee Consumed (Cups)',
                    backgroundcolor: "rgb(230, 200,230)",
                    gridcolor: "rgb(255, 255, 255)",
                    showbackground: true,
                    zerolinecolor: "rgb(255, 255, 255)"
                },
                zaxis:{
                    title: 'Time Studied (Hours)',
                    backgroundcolor: "rgb(230, 230,200)",
                    gridcolor: "rgb(255, 255, 255)",
                    showbackground: true,
                    zerolinecolor: "rgb(255, 255, 255)"
                },
            },
        };
        Plotly.newPlot('matrix3d', graphData, layout, {responsive: true});
    }
    plot2dMatrix(matrix) {
        let trace2 = {
            x: getColumn(matrix, 0),
            y: getColumn(matrix, 1),
            mode: 'markers',
            type: 'scatter',
            name: 'Team B',
            text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
            marker: { size: 12 }
        };
          
        let graphData = [ trace2 ];
        
        var layout = {
            paper_bgcolor: "lavender",
            xaxis: {
              title: {
                text: 'Grade (Normalized)',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
            },
            yaxis: {
              title: {
                text: 'Coffee AND Studying',
                font: {
                  family: 'Courier New, monospace',
                  size: 18,
                  color: '#7f7f7f'
                }
              }
            }
        };
        Plotly.newPlot('matrix2d', graphData, layout, {responsive: true});
    }
}
let page = new infoPage();
page.loadPage();