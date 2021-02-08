import './styles/globals.css'

import importSvgIcons from './helpers/importSvgIcons'

const svgIconPathArray = require.context('./icons', true, /\.svg$/)

importSvgIcons(svgIconPathArray)
