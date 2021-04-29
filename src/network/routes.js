const express  = require( 'express' )
const index    = require( '../components/index/network' )
const about    = require( '../components/about/network' )
const help     = require( '../components/help/network' )
const products = require( '../components/products/network' )
const weather  = require( '../components/weather/network' )
const notFound  = require( '../components/404/network' )

const routes = ( server ) => {
    server.use( '/', index )
    server.use( '/about', about )
    server.use( '/help', help )
    server.use( '/products', products )
    server.use( '/weather', weather )
    server.use( '*', notFound )
}

module.exports = routes