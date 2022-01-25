 function pegarProximoCurrentIndex(menoresCaminhos, nosChecados) {
    const menorValor = {
        value: Number.POSITIVE_INFINITY,
        index: null,
    }
    menoresCaminhos.forEach((value, index) => {
        const seForMenorDistancia = value < menorValor.value

        const seEsseNoNaoTiverSidoAvaliadoAinda = !nosChecados.includes(index);
        if(seForMenorDistancia && seEsseNoNaoTiverSidoAvaliadoAinda){
            menorValor.value = value;
            menorValor.index = index;
        }
    });
    return menorValor.index !== null ? menorValor.index : menoresCaminhos.findIndex(n => n === Number.POSITIVE_INFINITY);
 }
 
function dijkstrasAlgorithm(start, edges) {
    const nosValidos = [...edges];
	const menoresCaminhos = nosValidos.map( n => Number.POSITIVE_INFINITY)
	menoresCaminhos[start] = 0;
	const nosChecados = []
    

    
    let currentIndex = start;
	while(nosChecados.length < nosValidos.length) {
        const currentNode = nosValidos[currentIndex];
		currentNode.forEach( ([nodeId, distance]) => {
            const totalDistance = distance + menoresCaminhos[currentIndex]
			const seDistanciaParaNoEhMenor = totalDistance < menoresCaminhos[nodeId];
			const seEsseNoNaoTiverSidoAvaliadoAinda = !nosChecados.includes(nodeId);
			if (seDistanciaParaNoEhMenor && seEsseNoNaoTiverSidoAvaliadoAinda) {
				menoresCaminhos[nodeId] = totalDistance;
			}
		});
        
        nosChecados.push(currentIndex)
		currentIndex = pegarProximoCurrentIndex(menoresCaminhos, nosChecados);
	};
    
    return(menoresCaminhos.map(n => n === Number.POSITIVE_INFINITY ? -1 : n))
}


// Do not edit the line below.
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
