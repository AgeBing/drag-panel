import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Panel from './Panel'
function App() {
	return (
		<div className="App">
			<DragDropContextProvider backend={HTML5Backend}>
				<Panel />
			</DragDropContextProvider>
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)	
