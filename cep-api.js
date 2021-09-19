console.log("cep-api.js loaded.");

const BTN_CONSULT = document.getElementById("btn-consultar");
const CEP_INPUT = document.getElementById("CEP");
let PUBLIC_PLACE = document.getElementById("logradouro");
const NEIGHBORHOOD = document.getElementById("bairro");
const CITY = document.getElementById("cidade");
const FEDERATIVE_UNIT = document.getElementById("UF");
const CITY_CODE = document.getElementById("cod-municipio");
const DDD = document.getElementById("DDD");
let cepValue = undefined;

const api = {
  fetchCEP: (CEP) => {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
      .then((res) => res.json())
      .then((data) => api.displayCEPINFO(data));
  },
  displayCEPINFO: (data) => {
    const { logradouro } = data;
    const { bairro } = data;
    const { localidade } = data;
    const { uf } = data;
    const { ibge } = data;
    const { ddd } = data;
    // console.log(logradouro, bairro, localidade, uf, ibge, ddd);
    PUBLIC_PLACE.value = logradouro;
    NEIGHBORHOOD.value = bairro;
    CITY.value = localidade;
    CITY_CODE.value = ibge;
    FEDERATIVE_UNIT.value = uf;
    DDD.value = ddd;
  },
};

CEP_INPUT.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    BTN_CONSULT.click();
  }
});

BTN_CONSULT.addEventListener("click", function() {
    cepValue = CEP_INPUT.value;
    api.fetchCEP(cepValue);
});
