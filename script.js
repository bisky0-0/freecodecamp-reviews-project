let listOfReviews = [
    {
        photo: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name: "mariam salem",
        job: "student",
        review: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing \
        shutters nay. Old insipidity motionless continuing law shy partiality. Depending acuteness\
         dependent eat use dejection. Unpleasing astonished discovered not nor shy. Morning hearted\
          now met yet beloved evening Has and upon his last here must."
    },
    {
        photo: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        name: " ali omar",
        job: "student",
        review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom \
        fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, \
        edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        photo: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "ahmed abod",
        job: "dog",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn.\
         Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal\
          slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        photo: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name: "anna jahson",
        job: "web designer",
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt\
        glossier gastropub deep v vice franzen hell\
        of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    }
]

let randomIndex = function () {
    return Math.floor(Math.random() * listOfReviews.length);
}
let userImage = document.getElementById("image");
let userName = document.getElementById("name");
let userJob = document.getElementById("job");
let userReview = document.getElementById("review");
let button = document.getElementById("button");

button.onclick = function () {
    let randonNum = randomIndex();
    userImage.src = listOfReviews[randonNum].photo;
    userName.textContent = listOfReviews[randonNum].name;
    userJob.textContent = listOfReviews[randonNum].job;
    userReview.textContent = listOfReviews[randonNum].review;
}