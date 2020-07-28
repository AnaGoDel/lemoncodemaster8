import { MemberEntity } from '../models/member'

// export const getMembersGitHub (organizationName: string): Promise<MemberEntity[]> => {
export const getMembersAPI = (organizationName: string) => (page: number) => {
    const urlGithub = `https://api.github.com/orgs/${organizationName}/members?page=${page}`;

    return fetch(urlGithub)
        .then((response) => response.json())
        .then((json) => json);

}

// private resolveMembers(data: any): Promise < MemberEntity[] > {

//     const members = data.map((gitHubMember) => {
//         var member: MemberEntity = createDefaultMemberEntity();

//         member.id = gitHubMember.id;
//         member.login = gitHubMember.login;
//         member.avatar_url = gitHubMember.avatar_url;

//         return member;
//     });

//     return Promise.resolve(members);
// }
// }