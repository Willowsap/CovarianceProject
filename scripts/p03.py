# Supplied Functions
def get_transpose(m):
    return list(map(list,zip(*m)))
def dot_product(a, b):
    return sum([ai * bi for ai, bi in zip(a, b)])
def matrix_vector_product(a, b):
    return [dot_product(ai, b) for ai in a]
def matrix_multiply(a, b):
    return get_transpose([matrix_vector_product(a, bj) for bj in get_transpose(b)])

# Added utility functions
# Returns a specified column in a given matrix as a list
# Used in:
#   Problem 1: mean
def getColumn(a, j):
    col = []
    for i in range(len(a)):
        col.append(a[i][j])
    return col

# Computes the mean of a single columns
# Used in:
#   Problem 1: mean
def single_mean(v):
    sum = 0
    for i in range(len(v)):
        sum += v[i]
    return sum / len(v)

# Calculates a single covariance value
# Used in:
#   Problem 2: cov
def single_cov(x, x_bar, j, k,):
    sum = 0
    for i in range(len(x)):
        sum += ((x[i][j] -  x_bar[j]) * (x[i][k] - x_bar[k]))
    return sum * (1 / (len(x) - 1))

def largest_col(x):
    largest_mag = magnitude(getColumn(x, 0))
    largest_mag_col = 0
    for j in range(len(x[0])):
        mag = magnitude(getColumn(x, j))
        if (mag > largest_mag):
            largest_mag = mag
            largest_mag_col = j
    return x[largest_mag_col]

def largest_row(x):
    largest_mag = magnitude(x[0])
    largest_mag_row = 0
    for i in range(len(x[0])):
        mag = magnitude(x[i])
        if (mag > largest_mag):
            largest_mag = mag
            largest_mag_row = i
    return x[largest_mag_row]

# Finds the magnitude of a vector
# Used in:
#   Proglem 3: power_iteration
#   Helper Function: largest_col
def magnitude(v):
    sum = 0
    for i in range(len(v)):
        sum += v[i] ** 2
    return sum ** 0.5

# Multiplies two vectors of the same length
# Transposes the second vector
# Returns a scalar
# Used in:
#   Problem 3: power_iteration
def vector_product_v2T(v1, v2):
    product = 0
    for i in range(len(v1)):
        product += v1[i] * v2[i]
    return product

# Divides every element in a vector by a scalar
# Used in:
#   Problem 3: power_iteration    
def vector_divide_by_scalar(v, c):
    for i in range(len(v)):
        v[i] /= c
    return v

# Multiplies a vector by itself in the form:
# v1^T * v
# additionally multiplies each element by a scalar c
# Returns a square matrix of the length of the vector
# Used in:
#   Problem 4: eig
# Note: this is a very specific function to the problem it is used in
# With it, the matrix can be created and scaled at once
def vector_to_matrix_times_scalar(v, c):
    m = []
    for i in range(len(v)):
        m_row = []
        for j in range(len(v)):
            m_row.append(v[i] * v[j] * c)
        m.append(m_row)
    return m

# Subtracts matrix b from a element-wise
# Returns the result
# Used in:
#   Problem 4: eig
def matrix_minus_matrix(a, b):
    c = []
    for i in range(len(a)):
        c_row = []
        for j in range(len(a[i])):
            c_row.append(a[i][j] - b[i][j])
        c.append(c_row)
    return c

# Kind of a weird one.
# Takes a matrix and a vector with length equal to 
# the number of columns of the matrix.
# Subtracts v[col] from every element in a[col]
# Returns the result
# Used in:
#   Problem 5: pca
def matrix_minus_vector(a, v):
    b = []
    for i in range(len(a)):
        b_row = a[i]
        for j in range(len(v)):
            b_row[j] -= v[j]
        b.append(b_row)
    return b

# Problem 1
def mean(x):
    return [single_mean(getColumn(x, j)) for j in range(len(x[0]))]

# Problem 2
def cov(x):
    x_bar = mean(x)
    K = []
    for j in range(len(x[0])):
        K_row = []
        for k in range(len(x[0])):
            K_row.append(single_cov(x, x_bar, j, k))
        K.append(K_row)
    return K

# Problem 3
def power_iteration(a, num_iter):
    v = largest_row(a)
    for n in range(num_iter):
        v = matrix_vector_product(a,v)
        v = vector_divide_by_scalar(v, magnitude(v))
    return v, vector_product_v2T(matrix_vector_product(a, v), v) / vector_product_v2T(v,v)

#problem 4
def eig(a, num_components, num_iter):
    w = []
    d = []
    for i in range(num_components):
        v1, d1 = power_iteration(a, num_iter)
        d.append(d1)
        w.append(v1)
        a = matrix_minus_matrix(a, vector_to_matrix_times_scalar(v1, d1))
    return get_transpose(w), d

def pca(x, num_components, num_iter):
    w, d = eig(cov(x), num_components, num_iter)
    return matrix_multiply(matrix_minus_vector(x, mean(x)), w)


def findmagnitude(a):
    mag = 0
    for i in range(len(a)):
        mag += a[i]**2
    return mag ** (1/2)

print(findmagnitude([1,2,3]))
x = [[ 6, 6, 1],
[ 4, -9, 8],
[ 5, 1, -2],
[-2, 9, -2],
[ 7, -6, 3],
[-5, 8, -3],
[ 4, 2, -7],
[-6, 3, -6],
[ 3, -8, 2],
[-1, -9, 7]]
c = cov(x)
v, d = power_iteration(c, 1000)
print(d)
print(v)