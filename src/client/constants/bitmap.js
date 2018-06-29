import _ from "lodash";

export const Map = (type, rot) => {
	console.log("type = " + type + " rot = " + rot);
	if (type === "I")
	{
		if (rot == 0 || rot == 2)
		{
			return (
			   [[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],]
			)
		}
		else
		{
			return (
			   [[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 0, 0],
				[0, 1, 0, 0],]
			)
		}
	}
}

export const deleteLastPos = (lgn, col, gameMap, tetriMap, CaseState) => {
	var i = 0;
	var j = 0;
	var tmp_col = col;
	
	console.log("la gameMap : ")
	console.log(gameMap);

	while (i < 4)
	{
		while (j < 4)
		{
			if (tetriMap[i][j])
			_.fill(gameMap[lgn], CaseState, tmp_col, tmp_col + 1)
			tmp_col++;
			j++;
		}
		lgn++;
		tmp_col = col;
		i++;
		j = 0;
	}
	console.log("after gameMap : ")
	console.log(gameMap);
	return (gameMap);
}

export const fillMap = (lgn, col, gameMap, tetriMap, CaseState) => {
	var i = 0;
	var j = 0;
	var tmp_col = col;
	
	console.log("la gameMap : ")
	console.log(gameMap);

	while (i < 4)
	{
		while (j < 4)
		{
			if (tetriMap[i][j])
			_.fill(gameMap[lgn], CaseState, tmp_col, tmp_col + 1)
			tmp_col++;
			j++;
		}
		lgn++;
		tmp_col = col;
		i++;
		j = 0;
	}
	console.log("after gameMap : ")
	console.log(gameMap);
	return (gameMap);
}
