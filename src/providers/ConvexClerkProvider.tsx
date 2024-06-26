"use client"
import { ReactNode } from "react"
import { ConvexReactClient } from "convex/react"
import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
interface IConvexClerkProvider {
  children: ReactNode
}

const ConvexClerkProvider = ({ children }: IConvexClerkProvider) => (
  <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    appearance={{
      layout: {
        socialButtonsVariant: "iconButton",
        logoImageUrl: "/icons/auth-logo.svg",
      },
      variables: {
        colorBackground: "#15171c",
        colorPrimary: "",
        colorText: "white",
        colorInputBackground: "#1b1f29",
        colorInputText: "white",
      },
    }}
  >
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  </ClerkProvider>
)

export default ConvexClerkProvider
