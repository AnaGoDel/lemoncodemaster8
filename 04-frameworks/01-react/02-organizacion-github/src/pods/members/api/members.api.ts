import { MemberEntity } from '../members.vm';
const parse = require('parse-link-header');

const url = `https://api.github.com/orgs/`;

export const getMembersAPI = (organizationName: string) => (page: number) => {
    return fetch(`${url}${organizationName}/members?page=${page}`)
        .then((response) => response.json())
        .then((json) => json)
};

export const getLastPageAPI = (organizationName: string) => {
    return fetch(`${url}${organizationName}/members`)
        .then(res => {
            const headers = parse(res.headers.get('Link'));
            return headers !== null ? headers.last.page : 1;
        });
}