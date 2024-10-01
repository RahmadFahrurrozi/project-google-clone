import DescriptionTittle from "../../components/atomsAuth/descriptionTittle";
import AuthLogo from "../../components/atomsAuth/logo";
import AuthTittle from "../../components/atomsAuth/tittle";

const LeftAuth = (props) => {
  const { types } = props;
  return <DynamicLeftAuth types={types} />;
};

const DynamicLeftAuth = (props) => {
  const { types } = props;
  if (types === "register") {
    return (
      <div className="w-full flex items-start gap-6 justify-start flex-col lg:w-1/2">
        <AuthLogo
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          alt="logo Google"
        />
        <AuthTittle>Register</AuthTittle>
        <DescriptionTittle>Daftar Menggunakan Email Google</DescriptionTittle>
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-start gap-6 justify-start flex-col lg:w-1/2">
        <AuthLogo
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
          alt="logo Google"
        />
        <AuthTittle>Login</AuthTittle>
        <DescriptionTittle>Masukkan email</DescriptionTittle>
      </div>
    );
  }
};

export default LeftAuth;
