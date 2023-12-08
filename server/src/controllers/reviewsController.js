const {Review, User} = require('../db')

const postReview = async (rating, comment, UserEmail) => {
    // Verificar si el usuario ya ha creado una revisión
    const existingReview = await Review.findOne({
        where: { UserEmail },
    });

    if (existingReview) {
        throw new Error('Ya has creado una revisión. Solo se permite una revisión por usuario.');
    }

    // Si el usuario no ha creado una revisión, proceder con la creación
    const newReview = await Review.create({
        rating,
        comment,
    });

    const addRev = await User.findOne({
        where: { email: UserEmail },
    });

    if (addRev) {
        await newReview.setUser(addRev);
    } else {
        throw new Error('Usuario no encontrado');
    }

    return newReview;
};

// ---------------------------------------------------------

const getAllReviews = async() => {

    const response = await Review.findAll({
        includes: [User]
    }) 
return response;
 };

//  -------------------------------------------------------

const getReviewsByUser = async (UserEmail)=>{

  const response = await User.findOne({
    where:{ email: UserEmail },
    include: [Review],
})
return response; 

};

//  --------------------------------------------------------------------------------------

const putReview = async(id)=>{
    const review = await Review.findByPk(id);
   
        return review;
    
};
//  --------------------------------------------------------------------------------------

module.exports = {
    postReview,
    getAllReviews,
    getReviewsByUser,
    putReview
};