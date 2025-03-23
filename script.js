document.querySelectorAll('select').forEach(select => select.addEventListener('change', validate));

const rules = [
    { hint: "Os Avós Argentinos estão hospedados na cabana Vermelha.", check: () => getHouseBy('nationality', 'argentinos').color === 'vermelha' },
    { hint: "Os Avós Brasileiros têm Cachorros como animais de estimação.", check: () => getHouseBy('nationality', 'brasileiros').pet === 'cachorros' },
    { hint: "Os Avós Japoneses bebem Chá.", check: () => getHouseBy('nationality', 'japoneses').drink === 'cha' },
    { hint: "A cabana Verde fica do lado esquerdo da cabana Branca.", check: () => isLeftOf('verde', 'branca') },
    { hint: "Os Avós que estão hospedados na cabana Verde bebem Café.", check: () => getHouseBy('color', 'verde').drink === 'cafe' },
    { hint: "Os Avós que têm como item essencial de viagem o Kit Primeiro Socorro criam Pássaros.", check: () => getHouseBy('item', 'kit').pet === 'passaros' },
    { hint: "Os Avós que estão hospedados na cabana Amarela têm como item essencial de viagem o Cantil.", check: () => getHouseBy('color', 'amarela').item === 'cantil' },
    { hint: "Os Avós que estão hospedados na cabana do meio bebem Vinho.", check: () => getHouse()[2]?.drink === 'vinho' },
    { hint: "Os Avós Americanos estão hospedados na primeira cabana.", check: () => getHouse()[0]?.nationality === 'americanos' },
    { hint: "Os Avós que têm como item essencial de viagem o Mapa Mundi estão hospedados ao lado do que tem Gatos.", check: () => isNextTo('item', 'mapa', 'pet', 'gatos') },
    { hint: "Os Avós que criam Cavalos vivem ao lado dos que têm como item essencial o Cantil.", check: () => isNextTo('pet', 'cavalos', 'item', 'cantil') },
    { hint: "Os Avós que têm como item essencial uma Lanterna, bebem Cerveja.", check: () => getHouseBy('item', 'lanterna').drink === 'cerveja' },
    { hint: "Os Avós Portugueses têm como item essencial de viagem a Bússola.", check: () => getHouseBy('nationality', 'portugueses').item === 'bussola' },
    { hint: "Os Avós Americanos estão hospedados ao lado da cabana Azul.", check: () => isNextTo('nationality', 'americanos', 'color', 'azul') },
    { hint: "Os Avós que têm como item essencial de viagem o Mapa Mundi são vizinhos dos que bebem Água.", check: () => isNextTo('item', 'mapa', 'drink', 'agua') }
];

function validate() {
    const clues = document.querySelectorAll('.clue');
    rules.forEach((rule, index) => {
        const clueElement = clues[index];
        if (rule.check()) {
            clueElement.style.textDecoration = 'line-through';
            clueElement.style.color = 'black';
        } else {
            clueElement.style.textDecoration = 'none';
            clueElement.style.color = 'red';
        }
    });

    ['color', 'nationality', 'drink', 'item', 'pet'].forEach(category => {
        const usedValues = Array.from(document.querySelectorAll(`.${category}`)).map(select => select.value);
        document.querySelectorAll(`.${category}`).forEach(select => {
            Array.from(select.options).forEach(option => {
                if (option.value !== '-1') {
                    option.disabled = usedValues.includes(option.value);
                }
            });
        });
    });

    // Atualiza a cor de fundo da cabana
    updateHouseColors();
}

function updateHouseColors() {
    const houses = document.querySelectorAll('.house');
    houses.forEach(house => {
        const colorSelect = house.querySelector('.color');
        const colorValue = colorSelect.value;

        // Mapeamento de cores do texto para cores CSS
        const colorMap = {
            'amarela': '#ffff00',
            'azul': '#0000ff',
            'branca': '#ffffff',
            'verde': '#008000',
            'vermelha': '#ff0000'
        };

        // Atualiza a cor de fundo da cabana
        house.style.backgroundColor = colorMap[colorValue] || 'rgba(255, 255, 255, 0.9)';
    });
}

// Chama updateHouseColors na inicialização para garantir que as seleções iniciais sejam aplicadas
updateHouseColors();

function getHouse() {
    return Array.from(document.querySelectorAll('.house')).map(house => {
        return {
            color: house.querySelector('.color').value,
            nationality: house.querySelector('.nationality').value,
            drink: house.querySelector('.drink').value,
            item: house.querySelector('.item').value,
            pet: house.querySelector('.pet').value
        };
    });
}

function getHouseBy(property, value) {
    return getHouse().find(house => house[property] === value) || {};
}

function isLeftOf(left, right) {
    const houses = getHouse();
    const leftIndex = houses.findIndex(h => h.color === left);
    const rightIndex = houses.findIndex(h => h.color === right);
    return leftIndex !== -1 && rightIndex !== -1 && leftIndex + 1 === rightIndex;
}

function isNextTo(prop1, val1, prop2, val2) {
    const houses = getHouse();
    const index1 = houses.findIndex(h => h[prop1] === val1);
    const index2 = houses.findIndex(h => h[prop2] === val2);
    return index1 !== -1 && index2 !== -1 && Math.abs(index1 - index2) === 1;
}

function showVictory() {
    document.getElementById('victory-popup').style.display = 'block';
}

function closeVictory() {
    document.getElementById('victory-popup').style.display = 'none';
}