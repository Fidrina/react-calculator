class CalculatorController {
    run(arg) {
        return new Function(`return ${arg}`)();
    }
}

export default CalculatorController;