import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const FormPage=tw.form`flex flex-col p-8 bg-white`
const SignInText=tw.h3`font-bold mb-4`
const UserInputText=tw.input`border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`
const UserPasswordText=tw.input`border border-gray-400 mb-3 w-48 h-10 pl-2 focus:outline-none rounded`
const SignInButton=tw.button`flex justify-center w-48 h-10 rounded bg-gray-900 text-white focus:outline-none cursor-pointer`
const ErrorMessagetext=tw.span`text-red-700 mt-2 w-48 text-sm`


 export {FormPage,SignInText,UserInputText,UserPasswordText,SignInButton,ErrorMessagetext}

