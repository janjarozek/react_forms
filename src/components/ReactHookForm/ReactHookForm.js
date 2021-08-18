import React from 'react';
import { useForm } from 'react-hook-form';

const styles = {
  label: {
    display: "inline",
    textAlign: "left"
  },
  submitBtn: {
    display: "block"
  },
  paragraph: {
    width: "fit-content",
    // width: "-moz-fit-content",
    // width: "-web-fit-content",
    blockSize: "fit-content"
  }
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
      <div>
        <p className="header">
            Formularz z React Hook Form
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          id="name"
        />
        {errors.name?.type === "required" && (
          <p style={styles.paragraph}>First name is required</p>
        )}

        <input
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]*$/
          })}
          id="email"
        />
        {errors.email?.type === "required" && (
          <p style={styles.paragraph}>Your email adress is required</p>
        )}
        <textarea
          placeholder="Bio"
          {...register("bio", { minLength: 10 })}
          id="bio"
        />
        {errors.bio?.minLength >= 10 && (
          <p style={styles.paragraph}>
            Your biography should have at least 100 characters!
          </p>
        )}
        <p style={styles.paragraph}>
          <input
            style={styles.label}
            type="radio"
            id="woman"
            {...register("gender", { required: true })}
            value="woman"
          />
          <label style={styles.label} for="woman">
            WOMAN
          </label>
          <input
            style={styles.label}
            type="radio"
            id="man"
            {...register("gender", { required: true })}
            value="man"
          />
          <label style={styles.label} for="man">
            MAN
          </label>
          {errors.gender?.type === "required" && (
            <p style={styles.paragraph}>Please select your gender.</p>
          )}
        </p>
        <p style={styles.paragraph}>
          <input
            style={styles.label}
            type="checkbox"
            {...register("acceptance", { required: true })}
            id="acceptance"
            value={true}
          />
          <label style={styles.label} for="acceptance">
            Reg acceptance.
          </label>
          {errors.acceptance?.type === "required" && (
            <p style={styles.paragraph}>Read and accept the regulations.</p>
          )}
        </p>

        <input style={styles.submitBtn} type="submit" />
      </form>
    </div>
  );
}
