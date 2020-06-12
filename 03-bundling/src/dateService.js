export function getFullDate(scores) {
    const myDate = new Date();
    return `${myDate.getDate()}/${myDate.getMonth()}/${myDate.getFullYear()}`;
}