export const nodeRectWidth = 150
export const nodeRectHeight = 100


export const panelWidth = 800
export const panelHeight = 400

export const initalNodeX = 20
export const initalNodeY = 80

let idCounts = 100,
	idArray = []
for(let i = 0;i < idCounts;i++){
	idArray[i] = i+1
}
idArray.sort(()=>(0.5 - Math.random()))

export function getRandId(){
	if(idArray.length <= 0){
		console.log('id not enough')
		return -1
	}
	return idArray.shift()
}


export function getNewPosition(x,y){

	return {
		x : x + nodeRectWidth + 20,
		y : y
	}
}