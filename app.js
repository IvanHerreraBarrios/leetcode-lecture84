/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    
    for (let i = 0; i < this.matrix.length; i++) {
        this.matrix[i].unshift(0)
        for (let j = 1; j < this.matrix[i].length; j++) {
            this.matrix[i][j] = matrix[i][j] + matrix[i][j-1]
        }
    }

    console.log(matrix)

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
   
    let sum = 0
    let col = 0
    for(let row = row1; row <= row2; row++){
        //sum += this.matrix[row][col2] - this.matrix[row][col1]
        sum += this.matrix[row][col2+1] - this.matrix[row][col1]
    }
    return sum
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */