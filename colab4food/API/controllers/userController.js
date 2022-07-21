let mainFunction = (db) => {
  const getAllUsers = async (req, res) => {
    res.send(await db.user.findAll());

    // await db.user
    //   .create({
    //     id_tipoUser: 1,
    //     nomeUser: 'João',
    //     email: 'dd',
    //     username: 'dd',
    //     password: 'dd',
    //   })
    //   .then((response) => {
    //     res.send(response);
    //   });
  };

  const getUserById = async (req, res) => {
 try {
      return await db.user
        .findAll({
          where: {
            id_user: req.query.id_user,
          },
        })
        .then((response) => {
          if (response.length === 0) {
            throw ' No matches';
          } else {
            res.send(response);
          }
        });
    } catch (err) {
      res.send(err);
    }
  };


  const login = async (req, res) => {
console.log(req.body.email);
    try {
         return await db.user
           .findOne({
             where: {
               email: req.body.email,
              password:req.body.password
             },
           })
           .then((response) => {
          
             if (!response) {
               throw 'No matches';
             } else {
               res.send(response);
             }
           });
       } catch (err) {
         res.send(err);
       }

     };


  return {
    getAllUsers,
    getUserById,
    login
  };
};

module.exports = {
  mainFunction,
};
