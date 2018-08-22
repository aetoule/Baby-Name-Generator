let names = [ 
    {
    name:'',
    gender:'',
    region:''
    }
]

let id = 0;

let individualInfo = {
    id: 0,
    name: '',
    gender:'',
    region:''
};

let favoriteNames = [];

console.log('one', favoriteNames);

module.exports = {
    // read the randomly generated name edit: read the favorites list
	read: (req, res) =>
	{
        console.log(names);
		res.status(200).send(names);
    },
    
    // add a name to the favorites list !! not working
    create: (req, res) =>
    {
        let {name, gender, region} = req.body.apiName;
        console.log('req.body-------',req.body.apiName);
    //    individualInfo = {
    //        id: id, 
    //        name: req.params.name, 
    //        gender: req.params.gender, 
    //        region:req.params.region
    //     };
       individualInfo = 
       {id: id++, name, gender, region};
       console.log("this is happening in controller create method");
        //this stuff is undefined
       console.log("before push");
       console.log(individualInfo);
       //console.log({id, name, gender, region});
    
       favoriteNames.push(individualInfo);

       console.log("after push");
       console.log(favoriteNames);
       console.log(individualInfo);
                  //console.log({id, name, gender, region});
       
       res.status(200).send(favoriteNames);
    },

    // update an existing name (like spelling)
    // how to update with out an id #??
    update: (req, res) =>
    { 
        console.log('kutgjvultftuuty', req.body)
        const {name} = req.body;
        const updateID = req.params.id;
        //find the index of the name you want to update
        const oldNameIndex = favoriteNames.findIndex( name => 
        name.id == updateID)
        let oldName = favoriteNames[oldNameIndex];
        console.log(favoriteNames[oldNameIndex])
        favoriteNames[oldNameIndex].name = name;
        res.status(200).send(favoriteNames);
    },

    delete: (req, res) => {
        // set deleteID to the given id form req
        const deleteID = req.params.id;
        // find the name that belongs to deleteID's id
        nameIndex = favoriteNames.findIndex( name => name.id == deleteID);
        // delete the name at nameIndex
        favoriteNames.splice(nameIndex, 1);
        //id--;
        // individualInfo = {id: id--, name, gender, region};
        res.status(200).send(favoriteNames);
    }
};
