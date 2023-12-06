const {Review, User} = require('../db')

const postReview = async (rating, comment, UserEmail) => {
    const newReview = await Review.create({
        rating,
        comment
    })
//console.log ('Correo: ',UserEmail);

const addRev = await User.findOne({
    where: {email: UserEmail}
});
console.log('Para relacionar: ',addRev);
if (addRev){
    await newReview.setUser(addRev);
} else {
    throw new Error ('Usuario no encontrado');
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


module.exports = {
    postReview,
    getAllReviews,
    getReviewsByUser
};