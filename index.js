const axios = require('axios');
const brasilapi = 'https://brasilapi.com.br/api';

/**
 * 
 * @param {int64} cep CEP 
 * @returns Promise
 */
exports.cep = async (cep) => {
    try {
        let res = await axios.get(`${brasilapi}/cep/v2/${cep}`);
        return { statusCode: res.status, data: res.data };
    } catch (error) {
        throw new InternalError(error);
    }
}

/**
 * 
 * @returns Promise
 */
exports.estados = async () => {
    try {
        let res = await axios.get(`${brasilapi}/ibge/uf/v1`);
        return res.data;
    } catch (error) {
        throw new InternalError(error);
    }
}

/**
 * 
 * @param {string} sigla Sigla do UF ou ID
 * @returns Primise
 */
exports.estado = async (sigla) => {
    try {
        let res = await axios.get(`${brasilapi}/ibge/uf/v1/${sigla}`);
        return { statusCode: res.status, data: res.data };
    } catch (error) {
        throw new InternalError(error);
    }
}

/**
 * 
 * @param {string} siglaUF Sigla do estado
 * @returns Promise
 */
exports.municipios = async (siglaUF) => {
    try {
        let res = await axios.get(`${brasilapi}/ibge/municipios/v1//${siglaUF}`);
        let data = res.data || [];
        return { statusCode: res.status, data: data };
    } catch (error) {
        throw new InternalError(error);
    }
}