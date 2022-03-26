module.exports = class {

    a = 0
    b = 0
    c = 0
  
    constructor(a = 1, b = -12, c = 32) {
      if (a == 0) {
        throw new Error("a cannot be 0")
      }
      this.a = a
      this.b = b
      this.c = c
    }
  
    getDiscriminant() {
      return (this.b ** 2 - (4 * this.a * this.c))
    }
  
    solve() {
  
      if (this.getDiscriminant() < 0) {
        return NaN
      }
      const root1 = ((-this.b + Math.sqrt(this.getDiscriminant())) / 2 * this.a)
      const root2 = ((-this.b - Math.sqrt(this.getDiscriminant())) / 2 * this.a)
  
  
      return [root1, root2]
  
    }
  }