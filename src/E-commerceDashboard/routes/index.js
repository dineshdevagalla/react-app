import ProductPageRoute from './ProductPageRoute'
import { ProductPagePath } from '../constants/ProductPagePath'
import React from 'react'
import { Route } from 'react-router-dom'
import { ProtectedRoute } from '../../Common/ProtectedRoute'



export const EcommerceProductsDashboard = [
       //<Route path={ProductPagePath} component={ProductPageRoute}/>
       <ProtectedRoute key={ProductPagePath} path={ProductPagePath} component={ProductPageRoute} />
]
