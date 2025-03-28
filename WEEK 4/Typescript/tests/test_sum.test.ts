import type * as TestFunctions from "../index"
const {sum}=jest.requireActual<typeof TestFunctions>("../index.ts")
const successcase=[
    {
        id:0,
        input:{a:1, b:1},
        output:2
    },
    {
        id:1,
        input:{a:2, b:3},
        output:5
    },
    {
        id:2,
        input:{a:3, b:4},
        output:7
    },{
        id:3,
        input:{a:6, b:4},
        output:10
    },
    {
        id:4,
        input:{a:5, b:5},
        output:10
    },
]
describe("Test-sum-Functions", ()=>{
    it.each(successcase)("success case $id", ({input,output})=>{
const {a,b}=input
expect (sum(a,b)).toBe(output);

    })
})


