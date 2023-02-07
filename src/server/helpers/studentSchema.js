import j from "joi";
const studentSchema = j.object({
  name: j.string().min(3).required(),
  email: j.string().email().required(),
  major: j.string().min(3).required(),
  college: j.string().min(3).required(),
});
export default studentSchema;
