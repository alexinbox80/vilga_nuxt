import data from "./page.json";
// export default defineEventHandler(async (event) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 2000)
//     });
// });

export default defineEventHandler((event) => {
    return {
        data
    };
});
