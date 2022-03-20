import { animate, makeEaseOut } from "./helpers";

export const applyForm = (forms) => {
  const loaderBlock = `
  <div class="sk-three-bounce">
    <div class="sk-bounce-1 sk-child"></div>
    <div class="sk-bounce-2 sk-child"></div>
    <div class="sk-bounce-3 sk-child"></div>
  </div>
  `;

  const errorText = "Ошибка..";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";

  const setState = (field, valid = true) => {
    if (valid) {
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
    } else {
      field.classList.remove("is-valid");
      field.classList.add("is-invalid");
    }
  };

  const validate = (list) => {
    let success = true;

    list.forEach((fieldItem) => {
      if (
        !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения
        fieldItem.field.value !== ""
      ) {
        setState(fieldItem.field);
        fieldItem.field.setCustomValidity("");
        const StopException = {};
        try {
          fieldItem.fieldValidate &&
            fieldItem.fieldValidate.forEach((check) => {
              const testResult = forms.validateTest[check.test](fieldItem.field.value, ...check.args);
              if (!testResult.result) {
                StopException.message = testResult.message;
                throw StopException;
              }
            });
        } catch (e) {
          if (e !== StopException) {
            throw e;
          } else {
            setState(fieldItem.field, false);
            fieldItem.field.setCustomValidity(e.message);
            success = false;
          }
        }
      } else {
        setState(fieldItem.field, false);
        fieldItem.field.setCustomValidity("Поле не должно быть пустое");
        success = false;
      }
    });
    return success;
  };

  const clearData = (regexp, value) => {
    const repeatSpace = /( ){2,}/gi;
    const repeatMinus = /(\-){2,}/gi;
    const edgeSpace = /(^[ \-]+|[ \-]+$)/gi;

    value = value.replace(regexp, "");
    value = value.replace(repeatSpace, (str, $1) => $1);
    value = value.replace(repeatMinus, (str, $1) => $1);
    value = value.replace(edgeSpace, "");
    return value;
  };

  const upperFirstLitter = (value) => {
    const firstLitter = /((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi;
    value = value.toLowerCase();
    value = value.replace(firstLitter, (str, $1) => {
      return ($1 + "").toUpperCase();
    });
    return value;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      // "./dist/server.php"
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error("Возникла ошибка при отправке формы");
      }
    });
  };
  const presubmitForm = (formItem) => {
    if (validate(formItem.formFields)) {
      submitForm(formItem);
    } else {
      formItem.form.reportValidity();
    }
  };

  const submitForm = (formItem) => {
    formItem.formData = new FormData(formItem.form);
    formItem.formBody = {};

    formItem.statusBlock.innerHTML = loaderBlock;

    formItem.formData.forEach((value, key) => {
      formItem.formBody[key] = value;
    });

    formItem.someElement &&
      formItem.someElement.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (element) {
          if (elem.type === "block") {
            if (!elem.noTheEmpty && elem.noTheEmpty !== element.textContent) {
              formItem.formBody[elem.id] = element.textContent;
            }
          } else if (elem.type === "input") {
            if (elem.noTheEmpty != undefined && elem.noTheEmpty !== element.value) {
              formItem.formBody[elem.id] = element.value;
            }
          }
        }
      });

    formItem.formFields.forEach((input) => {
      input.field.disabled = true;
    });
    formItem.submitButton.disabled = true;

    sendData(formItem.formBody)
      .then((data) => {
        formItem.statusBlock.innerHTML = successText;
        formItem.statusBlock.style.opacity = 1;
        animate({
          duration: 7000,
          timing: (time) => 1 - time,
          draw(progress) {
            if (formItem.statusBlock.style.opacity) {
              formItem.statusBlock.style.opacity = progress;
            }
          },
        });

        setTimeout(() => {
          formItem.statusBlock.innerHTML = "";
          formItem.formFields.forEach((input) => {
            input.field.classList.remove("is-valid");
            input.field.disabled = false;
            input.field.value = "";
          });
          delete formItem.formData;
          formItem.submitButton.disabled = false;
          formItem.statusBlock.style.opacity = "";
          glCloseModal();
        }, 5000);
      })
      .catch((error) => {
        formItem.statusBlock.innerHTML = errorText;

        formItem.formFields.forEach((input) => {
          input.field.disabled = false;
        });
        delete formItem.formData;
        formItem.submitButton.disabled = false;

        console.log(error.message);
      });
  };

  try {
    forms.formList.forEach((formItem) => {
      formItem.form = document.getElementById(formItem.formId);
      if (!formItem.form) {
        throw new Error(`Отсутствует элемент с id="${formItem.formId}"`);
      }
      formItem.form.noValidate = true;
      formItem.submitButton = formItem.form.querySelector("button[type=submit]");
      formItem.statusBlock = document.createElement("div");
      formItem.statusBlock.style.color = "#333333";
      formItem.form.append(formItem.statusBlock);

      formItem.formFields.forEach((fieldItem) => {
        fieldItem.field = formItem.form.querySelector(fieldItem.fieldSelector);
        if (!fieldItem.field) {
          throw new Error(`Отсутствует элемент с селектором="${formItem.formId}"`);
        }
        fieldItem.field.classList.add("form-control");
        fieldItem.field.addEventListener("input", (e) => {
          fieldItem.field.setCustomValidity("");
          e.target.value = e.target.value.replace(
            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
            ""
          );
          e.target.classList.remove("is-valid");
          e.target.classList.remove("is-invalid");

          const maskPhone = "+7(___)___-__-__";
          const trimEnd = /[\D]+$/g;

          if (/phone/gi.test(fieldItem.fieldSelector)) {
            e.preventDefault();
            let value = e.target.value.replace(/\D/g, "");
            let i = 0;
            const numbers = value.padEnd(10, "_");

            value = maskPhone.replace(/(_)/g, (str, $1, ind) => {
              return numbers[i++];
            });
            e.target.value = value.replace(trimEnd, "");
            //e.target.value = value.slice(0, value.indexOf("_"));
          }
        });

        fieldItem.field.addEventListener("blur", (e) => {
          e.target.value = clearData(
            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
            e.target.value
          );
          if (/user_name/gi.test(fieldItem.fieldSelector)) {
            e.target.value = upperFirstLitter(e.target.value);
          }
        });
      });

      formItem.submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        presubmitForm(formItem);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
