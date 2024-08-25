

const emailTemplate = ({
    firstName = '',
    lastName = '',
    email = '',
    mobile = '',
    company = '',
    mold_tooling = '',
    message = ''
}) => {
    return `
        <div>
            <p>Name: <b>${firstName} ${lastName}</b></p>
            <p>Email: <b>${email}</b></p>
            <p>Mobile: <b>${mobile}</b></p>
            <p>Company: <b>${company}</b></p>
            <p>Mold Tooling: <b>${mold_tooling}</b></p>
            <p>Message: <b>${message}</b></p>
        </div>
    `;
};

module.exports = { emailTemplate }