'use strict';

const ratingStars = document.querySelectorAll('.rating');

    const photoUpload = document.getElementById('photo');
    const uploadedPhoto = document.getElementById('uploaded-photo');
    const removePhotoButton = document.getElementById('remove-photo');
    const currentRating = document.getElementById('current-rating');
    
    let rating;

    ratingStars.forEach((star, index) => {

      star.addEventListener('mouseenter', () => {

        resetStars();
        highlightStars(index);
      });

      star.addEventListener('click', () => {

        highlightStars(index);
        currentRating.textContent = `${index + 1}`;
        rating = index + 1;
      });

      star.addEventListener('mouseleave', () => {

        resetStars();

        if(rating) {

          highlightStars(rating - 1);
        }
      });
    });

    function highlightStars(index) {

      for (let i = 0; i <= index; i++) {
        
        ratingStars[i].classList.add('rated');
      }
    }

    function resetStars() {

      ratingStars.forEach((star) => star.classList.remove('rated'));
    }

    photoUpload.addEventListener('change', (e) => {

      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        uploadedPhoto.src = reader.result;
        uploadedPhoto.style.display = 'inline-block';
        removePhotoButton.style.display = 'inline-block';
      };

      reader.readAsDataURL(file);
    });

    removePhotoButton.addEventListener('click', () => {

      uploadedPhoto.src = '';
      uploadedPhoto.style.display = 'none';
      removePhotoButton.style.display = 'none';
      photoUpload.value = '';
    });

