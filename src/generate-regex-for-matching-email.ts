function escapeRegExp(text: string): string {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default (email: string): RegExp => {
  const escapedEmail = escapeRegExp(email);
  return new RegExp(`^${escapedEmail}$`, 'i');
};
