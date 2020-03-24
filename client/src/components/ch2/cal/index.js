import cramer from './cramer'
import gaussEliminate from './gauss-eliminate'
import gaussJordan from './gauss-jordan'
import lu from './lu'
import jacobi from './jacobi'
import gaussSeidel from './gauss-seidel'
import conjugateGradient from './conjugate-gradient'
const cals = {
    cramer,
    gaussEliminate,
    gaussJordan,
    lu,
    jacobi,
    gaussSeidel,
    conjugateGradient
}
export default cals;