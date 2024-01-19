$(document).ready(function () {
    var expression = '';

    $('.clear').click(function () {
        clearInput();
    });

    $('.equal').click(function () {
        evaluateExpression();
    });

    $('.multiply, .divide, .minus, .plus').click(function () {
        handleOperatorInput($(this).text());
    });

    $('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .decimal, .zero').click(function () {
        handleNumberInput($(this).text());
    });

    function clearInput() {
        $('.input').text('');
        expression = '';
        $('h2').text("Result = ");
    }

    function evaluateExpression() {
        expression = $('.input').text();
        try {
            var result = eval(expression);
            $('h2').text("Result = " + result);
        } catch (error) {
            alert('Invalid expression');
        }
    }

    function handleOperatorInput(operator) {
        expression += operator;
        $('.input').text(expression);
    }

    function handleNumberInput(number) {
        if (number === '0' && expression === '0') {
            // Não faça nada se houver zeros consecutivos
            return;
        }

        //Verifique se a entrada é zero e se já existem zeros no início
        if (number === '0' && expression.length === 0) {
            // Não faça nada se já houver zeros no início
            if (!expression.startsWith('0')) {
                expression += number;
                $('.input').text(expression);
            }
        } else {
            expression += number;
            $('.input').text(expression);
        }
    }
});
