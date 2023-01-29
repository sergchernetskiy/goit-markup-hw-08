const refs = {
  form: document.querySelector(".js-form"),
  license: document.querySelector(".js-license"),
  btnSubmit: document.querySelector(".js-submit"),
};

refs.form.addEventListener("click", onFormSubmit);
refs.license.addEventListener("change", onLicenseChange);

function onLicenseChange() {
  refs.btnSubmit.disabled = !refs.license.checked;
}

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    console.log(name, value);
  });
}

/* function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  const name = formElements.name.value;
  const tel = formElements.tel.value;
  const email = formElements.email.value;
  const comment = formElements.comment.value;

  const formData = {
    name,
    tel,
    email,
    comment,
  };
  console.log(formData);
} */
