import React from 'react'
import {render} from '@testing-library/react'
import Component1 from '../components/mainpages/utils/productItem//ProductItem'

describe("mock component test", () => {
    test("mock component in react", () => {
        const {container} = render(<Component1 />)
        console.log(container.outerHTML)
    })
})