# Customer Service App
A live webchat application to provide instantaneous customer support 24/7, utilizing MongoDB and NodeJS

## Concept

This system is designed to give the power of reliable support back to the users who need it. Registered users have the
ability to rate their support provider based on the quality of support they received. These reviews are then added to the public
rating of the employee. This type of feedback system ensures that the staff are always working their hardest to keep their customers happy.

Notable Cons:
- Troll reviews.
- Problems that support simply cannot help with earning them a poor review.
- Employee information being public.
- Keyboard racists only accepting support from ethnic groups they agree with (Such things would be easily deducible should avatars be personal images).
- Due to the lengthy nature of support requests and complaints, most issues will not be resolved in a single conversation.

Solutions to these cons:
- A system that provides the ability to review these reviews by providing a third party an anonimized version of
the chat logs. Said third party will then determine if the review is justified. If it is not, remove it.
- False information or simply using a username such as "CompanyName EmployeeID Number" - eg. Amazon 5453E3
- Using professional images, but not those of themselves. Such as company logos or department labels.
- Keep chats open between parties until the issue is resolved, or use an issue system similar to GitHub.

### Business Idea

How a company could use this application to improve their customer support system and improve relations with their consumer base:
- Feedback generated reviews let the client know that who they're talking to has been successful helping other clients.
- Creates a healthy spark of competition to have a higher rating than your colleagues.
- Employees missing the mark will be easy to spot for management so they can find the underperformers and take the 
necesarry steps to prevent poor performance.
- In-house reward system for the employee with the highest rating, ie. 2.5% bonus on monthly income for top three employees.

How will this increase the companies revenue:
- A happy customer will be much more likely to continue using your service.
- Many people make their decision on brand based on how a company handles issues with merchandise. ie. PC Hardware.
Having a solid support system will attract these individuals.

### To do list
- [x] Create a MongoDB storage
- [x] Set up continuous integration
- [x] Design the architecture of the system
- [x] Initialize a c9 domain for alpha stages
- [x] Experiment with Sockets.IO for the communication portion
- [x] Brainstorm DB normalization and security problems
- [X] Add login and register functionality
- [X] Create Schema for users
- [ ] Create sessions for each chat
- [ ] Create user types (Such as admin, user, support)
- [ ] Automatically log all chats with timestamps and user information of both parties.

### 15/07/2018
#### Completed
- Created employee usertype
- Seeded database with data
- Propagated said data to frontend
- Minimal amount of styling for homepage
#### In Progress
- User information page for employee
- Star system for rating
- Add register page for employees

### 16/07/2018
#### Completed
- Logic check the concept of the project.
- Design a business plan.
- Find problems with the idea and solve them.
- Create a profile page for the employee, providing relevent data.
#### In Progress
- Star system for rating.
- Registration page for employees.
- Edit your profile's information.
### 17/07/2018
#### Completed
- Storyboarding.
- Proofreading.
- Database tweaks and fixes.
### In Progress
- Better UI for Profile page.
- Edit Employee object to include more data.
### 18/07/2018
#### Completed
- Small fix on homepage link
-
-