// $
const $ = document

// add class or remove class function
function addClass(elm, classname) {
    elm.classList.add(classname)
}
function removeClass(elm, classname) {
    elm.classList.remove(classname)
}

// change theme to dark - light
const changeTheme = $.getElementById('ch-theme')
const main_bg = $.getElementById('main-bg')

changeTheme.addEventListener('click', () => {
    if (changeTheme.dataset.theme == 'dark') {
        changeTheme.textContent = 'Dark Theme'
        addClass($.documentElement, 'light-theme')
        addClass(main_bg, 'hidden')
        changeTheme.dataset.theme = 'light'
    } else {
        changeTheme.textContent = 'Light Theme'
        removeClass($.documentElement, 'light-theme')
        removeClass(main_bg, 'hidden')
        changeTheme.dataset.theme = 'dark'
    }
})

// keycodes
const keyCodes = {
    0: 'That key has no keycode',
    3: 'break',
    8: 'backspace / delete',
    9: 'tab',
    12: 'clear',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    21: 'hangul',
    25: 'hanja',
    27: 'escape',
    28: 'conversion',
    29: 'non-conversion',
    32: 'spacebar',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    41: 'select',
    42: 'print',
    43: 'execute',
    44: 'Print Screen',
    45: 'insert',
    46: 'delete',
    47: 'help',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    59: 'semicolon (firefox), equals',
    60: '<',
    61: 'equals (firefox)',
    63: 'ß',
    64: '@ (firefox)',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'Windows Key / Left ⌘ / Chromebook Search key',
    92: 'right window key',
    93: 'Windows Menu / Right ⌘',
    95: 'sleep',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: 'add',
    108: 'numpad period (firefox)',
    109: 'subtract',
    110: 'decimal point',
    111: 'divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    124: 'f13',
    125: 'f14',
    126: 'f15',
    127: 'f16',
    128: 'f17',
    129: 'f18',
    130: 'f19',
    131: 'f20',
    132: 'f21',
    133: 'f22',
    134: 'f23',
    135: 'f24',
    136: 'f25',
    137: 'f26',
    138: 'f27',
    139: 'f28',
    140: 'f29',
    141: 'f30',
    142: 'f31',
    143: 'f32',
    144: 'num lock',
    145: 'scroll lock',
    151: 'airplane mode',
    160: '^',
    161: '!',
    162: '؛ (arabic semicolon)',
    163: '#',
    164: '$',
    165: 'ù',
    166: 'page backward',
    167: 'page forward',
    168: 'refresh',
    169: 'closing paren (AZERTY)',
    170: '*',
    171: '~ + * key',
    172: 'home key',
    173: 'minus (firefox), mute/unmute',
    174: 'decrease volume level',
    175: 'increase volume level',
    176: 'next',
    177: 'previous',
    178: 'stop',
    179: 'play/pause',
    180: 'e-mail',
    181: 'mute/unmute (firefox)',
    182: 'decrease volume level (firefox)',
    183: 'increase volume level (firefox)',
    186: 'semi-colon / ñ',
    187: 'equal sign',
    188: 'comma',
    189: 'dash',
    190: 'period',
    191: 'forward slash / ç',
    192: 'grave accent / ñ / æ / ö',
    193: '?, / or °',
    194: 'numpad period (chrome)',
    219: 'open bracket',
    220: 'back slash',
    221: 'close bracket / å',
    222: 'single quote / ø / ä',
    223: '`',
    224: 'left or right ⌘ key (firefox)',
    225: 'altgr',
    226: '< /git >, left back slash',
    230: 'GNOME Compose Key',
    231: 'ç',
    233: 'XF86Forward',
    234: 'XF86Back',
    235: 'non-conversion',
    240: 'alphanumeric',
    242: 'hiragana/katakana',
    243: 'half-width/full-width',
    244: 'kanji',
    251: 'unlock trackpad (Chrome/Edge)',
    255: 'toggle touchpad',
};

// key locations
const keyLocations = {
    0: 'General keys',
    1: 'Left-side modifier keys',
    2: 'Right-side modifier keys',
    3: 'Numpad',
};

// create key lists table
const main = $.getElementById('main')
const viewTable = $.getElementById('view-table')
const table = $.createElement('table')

// find base elements
const keysContainer = $.getElementById('keys-container')
const intro = $.querySelector('.intro')

// create key lists table
function createTable() {
    table.innerHTML = `<thead>
    <tr class="flex">
        <th>KeyCode</th>
        <th>Key</th>
    </tr>
</thead>`
    table.className = 'keys-table container hidden'
    main.appendChild(table)

    for (const key in keyCodes) {
        const row = $.createElement('tr')
        row.innerHTML += `<td>${key}</td>`
        row.innerHTML += `<td>${keyCodes[key]}</td>`
        table.appendChild(row)
    }
}

// view key lists table onclick button 
function tableView() {
    viewTable.addEventListener('click', () => {
        if (viewTable.dataset.tableStatus == 'false') {
            viewTable.dataset.tableStatus = 'true'
            viewTable.textContent = '❌'
            removeClass(table, 'hidden')
            addClass(intro, 'hidden')
        } else {
            viewTable.dataset.tableStatus = 'false'
            viewTable.textContent = 'KeY Lists'
            addClass(table, 'hidden')
            removeClass(intro, 'hidden')
        }

        if (!keysContainer.classList.contains('hidden')) {
            addClass(keysContainer, 'hidden')
        } else {
            addClass(keysContainer, 'hidden')
        }
    })
}

// //////////////////////////////////////////////////////////////////

// catch keys and show on cards
function catchKeys() {
    const keysElements = {
        keycode: $.getElementById('keycode'),
        e_key: $.getElementById('e-key'),
        e_characterName: $.getElementById('character-name'),
        event_location: $.getElementById('event-location'),
        e_location: $.getElementById('e-location'),
        e_which: $.getElementById('e-which'),
        e_code: $.getElementById('e-code')
    }

    $.addEventListener('keydown', (e) => {
        if (viewTable.dataset.tableStatus == 'true') {
            addClass(keysContainer, 'hidden')
        } else {
            removeClass(keysContainer, 'hidden')
        }

        addClass(intro, 'hidden')

        keysElements.keycode.innerHTML = e.keyCode
        keysElements.e_key.innerHTML = e.key

        if (e.key === ' ') {
            keysElements.e_characterName.innerHTML = 'Space Character'
        } else {
            keysElements.e_characterName.innerHTML = ''
        }

        keysElements.event_location.innerHTML = e.location
        keysElements.e_location.innerHTML = keyLocations[e.location]
        keysElements.e_which.innerHTML = e.which
        keysElements.e_code.innerHTML = e.code
    })

    $.addEventListener('keydown', (e) => {
        if (e.key === 'r' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
        }

        if (e.key === 'F5') {
            e.preventDefault()
        }
    })
}

// create notification bars
const boxs = $.querySelectorAll('.box')
const eKeys = $.querySelectorAll('.box h1')
const notificationContainer = $.querySelector('.notification-bars')

function copyToClipBoard_shownotification() {
    // copy to clipboard
    navigator.clipboard.writeText(this.querySelector('h1').textContent)

    // create notification
    let noty = $.createElement('div')
    noty.className = 'noty'

    // check user press space and replace space character to ' '
    if (this.querySelector('h1').textContent == ' ') {
        this.querySelector('h1').textContent = 'Space Character'
    }

    noty.innerHTML = `<p>${this.querySelector('h1').textContent} Copied to clipboard</p>`
    notificationContainer.appendChild(noty)

    setTimeout(() => {
        noty.classList.add('noty-out')
    }, 3000)
}

boxs.forEach(box => {
    box.addEventListener('click', copyToClipBoard_shownotification)
})

// init methods
createTable()
catchKeys()
tableView()

// End