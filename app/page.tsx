import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const { isAuthenticated } = await auth()

  // Check the authenticated
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  // Get the Backend User object when need access to user info
  const user = await currentUser()

  // If no user exists
  if (!user) {
    return <div>User not found</div>
  }

  // Return the welcome message
  return <div>Welcome, {user.firstName}!</div>
}
