import { MemberEntity } from '../member.vm'
// const parse = require('parse-link-header');

export const getMembersAPI = (organizationName: string) => (page: number) => {
    const urlGithub = `https://api.github.com/orgs/${organizationName}/members?page=${page}`;

    return fetch(urlGithub)
        .then((response) => response.json())
        .then((json) => json)
}

export const isNextPageAvailable = (organizationName: string, page: number) => {
    return getMembersAPI(organizationName)(page).then(members => members.length !== 0)
}


// export const getLastPageAPI = (organizationName: string) => {
//     const urlGithub = `https://api.github.com/orgs/${organizationName}/members`;

//     return fetch(urlGithub)
//         .then(res => {
//             console.log(res.headers.get('Link'));
//             return parse(res.headers.get('Link')).last.page;
//         });
// }