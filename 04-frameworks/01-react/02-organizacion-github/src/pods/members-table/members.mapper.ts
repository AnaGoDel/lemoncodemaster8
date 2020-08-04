export const mapMembersListFromApiToViewModel = membersList => {
    return membersList.map(member => mapMemberFromApiToViewModel(member));
}

const mapMemberFromApiToViewModel = member => {
    return { ...member };
}