"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/account" className="text-black font-medium">
              Account
            </Link>
          </nav>

          <div className="max-w-3xl mx-auto">
            {isLoggedIn ? (
              <div>
                <h1 className="text-3xl font-bold mb-8">My Account</h1>

                <Tabs defaultValue="orders">
                  <TabsList className="w-full">
                    <TabsTrigger value="orders" className="flex-1">
                      Orders
                    </TabsTrigger>
                    <TabsTrigger value="wishlist" className="flex-1">
                      Wishlist
                    </TabsTrigger>
                    <TabsTrigger value="profile" className="flex-1">
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="addresses" className="flex-1">
                      Addresses
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="orders" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Your Orders</h2>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                        <Link href="/">
                          <Button>Start Shopping</Button>
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="wishlist" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Your Wishlist</h2>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
                        <Link href="/">
                          <Button>Discover Products</Button>
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="profile" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Profile Information</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="John" />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Doe" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                        </div>
                        <Button className="mt-2">Save Changes</Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="addresses" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Your Addresses</h2>
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">You haven't added any addresses yet.</p>
                        <Button>Add New Address</Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 text-center">
                  <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-3xl font-bold mb-8 text-center">Account</h1>

                <Tabs defaultValue="login">
                  <TabsList className="w-full">
                    <TabsTrigger value="login" className="flex-1">
                      Login
                    </TabsTrigger>
                    <TabsTrigger value="register" className="flex-1">
                      Register
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Login to Your Account</h2>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="loginEmail">Email</Label>
                          <Input id="loginEmail" type="email" placeholder="your.email@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="loginPassword">Password</Label>
                          <Input id="loginPassword" type="password" placeholder="••••••••" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <Link href="#" className="text-black hover:underline">
                              Forgot your password?
                            </Link>
                          </div>
                        </div>
                        <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                          Sign In
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="register" className="mt-6">
                    <div className="bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-medium mb-4">Create an Account</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="registerFirstName">First Name</Label>
                            <Input id="registerFirstName" placeholder="John" />
                          </div>
                          <div>
                            <Label htmlFor="registerLastName">Last Name</Label>
                            <Input id="registerLastName" placeholder="Doe" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="registerEmail">Email</Label>
                          <Input id="registerEmail" type="email" placeholder="your.email@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="registerPassword">Password</Label>
                          <Input id="registerPassword" type="password" placeholder="••••••••" />
                        </div>
                        <div>
                          <Label htmlFor="registerConfirmPassword">Confirm Password</Label>
                          <Input id="registerConfirmPassword" type="password" placeholder="••••••••" />
                        </div>
                        <div className="flex items-center">
                          <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            I agree to the{" "}
                            <Link href="#" className="text-black hover:underline">
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>
                        <Button className="w-full" onClick={() => setIsLoggedIn(true)}>
                          Create Account
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
