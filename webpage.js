const trieTimer = document.getElementById('trie-timer');
const hashTimer = document.getElementById('hash-timer');
const country_in = document.getElementById('country_in');
const trieBar = document.getElementById('trie-bar');
const hashBar = document.getElementById('hash-bar');
const globalStatus = document.getElementById('global-status');
const searchButton = document.getElementById('search-btn');
const clearButton = document.getElementById('clear-btn');
const sc = document.getElementById('scrollable_country');
const infoButton = document.getElementById('info-btn');
const closeBtton = document.getElementById('close_country');
const countryBody = document.getElementById('country-table-body');

const countryData = [
    {abbr: "AD", name: "Andorra"}, {abbr: "AE", name: "United Arab Emirates"},
    {abbr: "AF", name: "Afghanistan"}, {abbr: "AG", name: "Antigua and Barbuda"},
    {abbr: "AI", name: "Anguilla"}, {abbr: "AL", name: "Albania"},
    {abbr: "AM", name: "Armenia"}, {abbr: "AO", name: "Angola"},
    {abbr: "AQ", name: "Antarctica"}, {abbr: "AR", name: "Argentina"},
    {abbr: "AS", name: "American Samoa"}, {abbr: "AT", name: "Austria"},
    {abbr: "AU", name: "Australia"}, {abbr: "AW", name: "Aruba"},
    {abbr: "AX", name: "Åland Islands"}, {abbr: "AZ", name: "Azerbaijan"},
    {abbr: "BA", name: "Bosnia and Herzegovina"}, {abbr: "BB", name: "Barbados"},
    {abbr: "BD", name: "Bangladesh"}, {abbr: "BE", name: "Belgium"},
    {abbr: "BF", name: "Burkina Faso"}, {abbr: "BG", name: "Bulgaria"},
    {abbr: "BH", name: "Bahrain"}, {abbr: "BI", name: "Burundi"},
    {abbr: "BJ", name: "Benin"}, {abbr: "BL", name: "Saint Barthélemy"},
    {abbr: "BM", name: "Bermuda"}, {abbr: "BN", name: "Brunei Darussalam"},
    {abbr: "BO", name: "Bolivia"}, {abbr: "BQ", name: "Bonaire, Sint Eustatius and Saba"},
    {abbr: "BR", name: "Brazil"}, {abbr: "BS", name: "Bahamas"},
    {abbr: "BT", name: "Bhutan"}, {abbr: "BW", name: "Botswana"},
    {abbr: "BY", name: "Belarus"}, {abbr: "BZ", name: "Belize"},
    {abbr: "CA", name: "Canada"}, {abbr: "CC", name: "Cocos (Keeling) Islands"},
    {abbr: "CD", name: "Congo (DRC)"}, {abbr: "CF", name: "Central African Republic"},
    {abbr: "CG", name: "Congo (Republic)"}, {abbr: "CH", name: "Switzerland"},
    {abbr: "CI", name: "Côte d'Ivoire"}, {abbr: "CK", name: "Cook Islands"},
    {abbr: "CL", name: "Chile"}, {abbr: "CM", name: "Cameroon"},
    {abbr: "CN", name: "China"}, {abbr: "CO", name: "Colombia"},
    {abbr: "CR", name: "Costa Rica"}, {abbr: "CU", name: "Cuba"},
    {abbr: "CV", name: "Cape Verde"}, {abbr: "CW", name: "Curaçao"},
    {abbr: "CX", name: "Christmas Island"}, {abbr: "CY", name: "Cyprus"},
    {abbr: "CZ", name: "Czech Republic"}, {abbr: "DE", name: "Germany"},
    {abbr: "DJ", name: "Djibouti"}, {abbr: "DK", name: "Denmark"},
    {abbr: "DM", name: "Dominica"}, {abbr: "DO", name: "Dominican Republic"},
    {abbr: "DZ", name: "Algeria"}, {abbr: "EC", name: "Ecuador"},
    {abbr: "EE", name: "Estonia"}, {abbr: "EG", name: "Egypt"},
    {abbr: "ER", name: "Eritrea"}, {abbr: "ES", name: "Spain"},
    {abbr: "ET", name: "Ethiopia"}, {abbr: "FI", name: "Finland"},
    {abbr: "FJ", name: "Fiji"}, {abbr: "FK", name: "Falkland Islands"},
    {abbr: "FM", name: "Micronesia"}, {abbr: "FO", name: "Faroe Islands"},
    {abbr: "FR", name: "France"}, {abbr: "GA", name: "Gabon"},
    {abbr: "GB", name: "United Kingdom"}, {abbr: "GD", name: "Grenada"},
    {abbr: "GE", name: "Georgia"}, {abbr: "GF", name: "French Guiana"},
    {abbr: "GG", name: "Guernsey"}, {abbr: "GH", name: "Ghana"},
    {abbr: "GI", name: "Gibraltar"}, {abbr: "GL", name: "Greenland"},
    {abbr: "GM", name: "Gambia"}, {abbr: "GN", name: "Guinea"},
    {abbr: "GP", name: "Guadeloupe"}, {abbr: "GQ", name: "Equatorial Guinea"},
    {abbr: "GR", name: "Greece"}, {abbr: "GS", name: "South Georgia/Sandwich Is."},
    {abbr: "GT", name: "Guatemala"}, {abbr: "GU", name: "Guam"},
    {abbr: "GW", name: "Guinea-Bissau"}, {abbr: "GY", name: "Guyana"},
    {abbr: "HK", name: "Hong Kong"}, {abbr: "HN", name: "Honduras"},
    {abbr: "HR", name: "Croatia"}, {abbr: "HT", name: "Haiti"},
    {abbr: "HU", name: "Hungary"}, {abbr: "ID", name: "Indonesia"},
    {abbr: "IE", name: "Ireland"}, {abbr: "IL", name: "Israel"},
    {abbr: "IM", name: "Isle of Man"}, {abbr: "IN", name: "India"},
    {abbr: "IO", name: "Brit. Ind. Ocean Ter."}, {abbr: "IQ", name: "Iraq"},
    {abbr: "IR", name: "Iran"}, {abbr: "IS", name: "Iceland"},
    {abbr: "IT", name: "Italy"}, {abbr: "JE", name: "Jersey"},
    {abbr: "JM", name: "Jamaica"}, {abbr: "JO", name: "Jordan"},
    {abbr: "JP", name: "Japan"}, {abbr: "KE", name: "Kenya"},
    {abbr: "KG", name: "Kyrgyzstan"}, {abbr: "KH", name: "Cambodia"},
    {abbr: "KI", name: "Kiribati"}, {abbr: "KM", name: "Comoros"},
    {abbr: "KN", name: "Saint Kitts and Nevis"}, {abbr: "KP", name: "Korea (North)"},
    {abbr: "KR", name: "Korea (South)"}, {abbr: "KW", name: "Kuwait"},
    {abbr: "KY", name: "Cayman Islands"}, {abbr: "KZ", name: "Kazakhstan"},
    {abbr: "LA", name: "Lao PDR"}, {abbr: "LB", name: "Lebanon"},
    {abbr: "LC", name: "Saint Lucia"}, {abbr: "LI", name: "Liechtenstein"},
    {abbr: "LK", name: "Sri Lanka"}, {abbr: "LR", name: "Liberia"},
    {abbr: "LS", name: "Lesotho"}, {abbr: "LT", name: "Lithuania"},
    {abbr: "LU", name: "Luxembourg"}, {abbr: "LV", name: "Latvia"},
    {abbr: "LY", name: "Libya"}, {abbr: "MA", name: "Morocco"},
    {abbr: "MC", name: "Monaco"}, {abbr: "MD", name: "Moldova"},
    {abbr: "ME", name: "Montenegro"}, {abbr: "MF", name: "Saint Martin"},
    {abbr: "MG", name: "Madagascar"}, {abbr: "MH", name: "Marshall Islands"},
    {abbr: "MK", name: "North Macedonia"}, {abbr: "ML", name: "Mali"},
    {abbr: "MM", name: "Myanmar"}, {abbr: "MN", name: "Mongolia"},
    {abbr: "MO", name: "Macao"}, {abbr: "MP", name: "Northern Mariana Is."},
    {abbr: "MQ", name: "Martinique"}, {abbr: "MR", name: "Mauritania"},
    {abbr: "MS", name: "Montserrat"}, {abbr: "MT", name: "Malta"},
    {abbr: "MU", name: "Mauritius"}, {abbr: "MV", name: "Maldives"},
    {abbr: "MW", name: "Malawi"}, {abbr: "MX", name: "Mexico"},
    {abbr: "MY", name: "Malaysia"}, {abbr: "MZ", name: "Mozambique"},
    {abbr: "NC", name: "New Caledonia"}, {abbr: "NE", name: "Niger"},
    {abbr: "NF", name: "Norfolk Island"}, {abbr: "NG", name: "Nigeria"},
    {abbr: "NI", name: "Nicaragua"}, {abbr: "NL", name: "Netherlands"},
    {abbr: "NO", name: "Norway"}, {abbr: "NP", name: "Nepal"},
    {abbr: "NR", name: "Nauru"}, {abbr: "NU", name: "Niue"},
    {abbr: "NZ", name: "New Zealand"}, {abbr: "OM", name: "Oman"},
    {abbr: "PA", name: "Panama"}, {abbr: "PE", name: "Peru"},
    {abbr: "PF", name: "French Polynesia"}, {abbr: "PG", name: "Papua New Guinea"},
    {abbr: "PH", name: "Philippines"}, {abbr: "PK", name: "Pakistan"},
    {abbr: "PL", name: "Poland"}, {abbr: "PM", name: "St. Pierre and Miquelon"},
    {abbr: "PN", name: "Pitcairn"}, {abbr: "PR", name: "Puerto Rico"},
    {abbr: "PS", name: "Palestine"}, {abbr: "PT", name: "Portugal"},
    {abbr: "PW", name: "Palau"}, {abbr: "PY", name: "Paraguay"},
    {abbr: "QA", name: "Qatar"}, {abbr: "RE", name: "Réunion"},
    {abbr: "RO", name: "Romania"}, {abbr: "RS", name: "Serbia"},
    {abbr: "RU", name: "Russia"}, {abbr: "RW", name: "Rwanda"},
    {abbr: "SA", name: "Saudi Arabia"}, {abbr: "SB", name: "Solomon Islands"},
    {abbr: "SC", name: "Seychelles"}, {abbr: "SD", name: "Sudan"},
    {abbr: "SE", name: "Sweden"}, {abbr: "SG", name: "Singapore"},
    {abbr: "SH", name: "Saint Helena"}, {abbr: "SI", name: "Slovenia"},
    {abbr: "SK", name: "Slovakia"}, {abbr: "SL", name: "Sierra Leone"},
    {abbr: "SM", name: "San Marino"}, {abbr: "SN", name: "Senegal"},
    {abbr: "SO", name: "Somalia"}, {abbr: "SR", name: "Suriname"},
    {abbr: "SS", name: "South Sudan"}, {abbr: "ST", name: "Sao Tome and Principe"},
    {abbr: "SV", name: "El Salvador"}, {abbr: "SX", name: "Sint Maarten"},
    {abbr: "SY", name: "Syrian Arab Republic"}, {abbr: "SZ", name: "Eswatini"},
    {abbr: "TC", name: "Turks and Caicos Is."}, {abbr: "TD", name: "Chad"},
    {abbr: "TF", name: "French Southern Ter."}, {abbr: "TG", name: "Togo"},
    {abbr: "TH", name: "Thailand"}, {abbr: "TJ", name: "Tajikistan"},
    {abbr: "TK", name: "Tokelau"}, {abbr: "TL", name: "Timor-Leste"},
    {abbr: "TM", name: "Turkmenistan"}, {abbr: "TN", name: "Tunisia"},
    {abbr: "TO", name: "Tonga"}, {abbr: "TR", name: "Türkiye"},
    {abbr: "TT", name: "Trinidad and Tobago"}, {abbr: "TV", name: "Tuvalu"},
    {abbr: "TW", name: "Taiwan"}, {abbr: "TZ", name: "Tanzania"},
    {abbr: "UA", name: "Ukraine"}, {abbr: "UG", name: "Uganda"},
    {abbr: "UK", name: "United Kingdom"}, {abbr: "UM", name: "US Minor Outlying Is."},
    {abbr: "US", name: "United States"}, {abbr: "UY", name: "Uruguay"},
    {abbr: "UZ", name: "Uzbekistan"}, {abbr: "VA", name: "Holy See"},
    {abbr: "VC", name: "St. Vincent/Grenadines"}, {abbr: "VE", name: "Venezuela"},
    {abbr: "VG", name: "Virgin Islands (Brit.)"}, {abbr: "VI", name: "Virgin Islands (U.S.)"},
    {abbr: "VN", name: "Viet Nam"}, {abbr: "VU", name: "Vanuatu"},
    {abbr: "WF", name: "Wallis and Futuna"}, {abbr: "WS", name: "Samoa"},
    {abbr: "YE", name: "Yemen"}, {abbr: "YT", name: "Mayotte"},
    {abbr: "YU", name: "Yugoslavia (Historical)"}, {abbr: "ZA", name: "South Africa"},
    {abbr: "ZM", name: "Zambia"}, {abbr: "ZW", name: "Zimbabwe"}
];


function populateCountryTable() {
    countryBody.innerHTML = countryData.map(country => `
        <tr>
            <td>${country.abbr}</td>
            <td>${country.name}</td>
        </tr>
    `).join('');
}

infoButton.onclick = function() {
    populateCountryTable();
    sc.style.display = 'block';
};
closeBtton.onclick = function() {
    sc.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === sc) {
        sc.style.display = 'none';
    }
}

let timerInterval;
let searchActive = false;



async function runTrieSearch(targetCountry) {
    const startTime = performance.now();
    // const total = Dataset.length;
    for (let i = 0; i <= total; i++) {
        if (!searchActive) return; // Stop if search is cleared

        //insert logic 
        if(1 % 500 === 0 || i === total - 1){
            const elapsed = (performance.now() - startTime) / 1000;
            trieTimer.textContent = `Time: ${elapsed.toFixed(4)}s`;
            trieBar.style.width = `${((i + 1) / total) * 100}%`;
            await new Promise(r => setTimeout(resolve, 0)); 
        }
    }
}

async function runHashSearch(targetCountry) {
    const startTime = performance.now();
    const total = dataset.length;

    for (let i = 0; i < total; i++) {
        if (!searchActive) break;
    //insert logic
        if (i % 500 === 0 || i === total - 1) {
            const elapsed = (performance.now() - startTime) / 1000;
            hashTimer.textContent = elapsed.toFixed(4);
            hashBar.style.width = ((i + 1) / total * 100) + "%";
            await new Promise(resolve => setTimeout(resolve, 0));
            }
        }
    }

async function startSearch() {
    const country = country_in.value.trim();
    if (!country) {
        alert('Please enter a country name.');
        return;
    }
    // unfreezeCanvas(dfs_gif, dfs_canvas);
    // unfreezeCanvas(bfs_gif, bfs_canvas);
    // const time_t = new Date().getTime();
    // dfs_gif.src = `animations/dfs_animation.gif?v=${time_t}`;
    // bfs_gif.src = `animations/bfs_animation.gif?v=${time_t}`;
    // let start_time = performance.now();
    searchActive = true;
    searchButton.disabled = true;
    const dataset = new Array(100000).fill("datapoint");
    await Promise.all([
        runTrieSearch(country), 
        runHashSearch(country)
    ]);
    searchActive = false;
    searchButton.disabled = false;
}

function clearBoard(){
    searchActive = false;
    country_in.value = '';
    trieTimer.textContent = 'Time: 0.0000s';
    hashTimer.textContent = 'Time: 0.0000s';
    trieBar.style.width = '0%';
    hashBar.style.width = '0%';
    searchButton.disabled = false;
}

searchButton.addEventListener('click', startSearch);
clearButton.addEventListener('click', clearBoard);