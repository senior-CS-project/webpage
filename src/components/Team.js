import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "John Doe",
      photoUrl: "john-doe.jpg",
      email: "john@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe/",
    },
    {
      name: "John Doe",
      photoUrl: "john-doe.jpg",
      email: "john@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe/",
    },
    {
      name: "John Doe",
      photoUrl: "john-doe.jpg",
      email: "john@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe/",
    },
    {
      name: "John Doe",
      photoUrl: "john-doe.jpg",
      email: "john@example.com",
      linkedin: "https://www.linkedin.com/in/johndoe/",
    },
  ];
  return (
    <div class="py-20 bg-white">
      <div class="container mx-auto px-6 md:px-12 lg:px-8">
        <div class="mb-12 space-y-4 text-center">
            <h1 class="text-4xl font-bold text-gray-900 md:text-5xl">123123213</h1>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">asdfasdfasfdasfdasdf</p>
        </div>
        <div class="py-20 grid gap-12 md:grid-cols-3">
            <div class="border-t-4 space-y-8 group"> 
                <div class="w-32 h-32 -mt-16 mx-auto ronuded-[2rem] rotate-45 overflow-hidden">
                    <img></img>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
