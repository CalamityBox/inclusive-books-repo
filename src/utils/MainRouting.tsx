import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import About from '../pages/About/About'
import CatalogingProcess from '../pages/About/CatalogingProcess'
import SmartReading from '../pages/About/SmartReading'
import Accessibility from '../pages/Accessibility/Accessibility'
import Features from '../pages/Accessibility/Features'
import Feedback from '../pages/Accessibility/Feedback'
import AdvancedSearch from '../pages/Books/AdvancedSearch'
import AuthorsAndIllustrators from '../pages/Books/AuthorsAndIllustrators'
import Books from '../pages/Books/Books'
import QuickSearch from '../pages/Books/QuickSearch'
import Home from '../pages/Home/Home'
import MyCollections from '../pages/User/MyCollections'
import Profile from '../pages/User/Profile'
import Settings from '../pages/User/Settings'
import User from '../pages/User/User'

// Components
import Book from '../components/Books/Book'
import SignIn from '../pages/SignIn'
import Protected from '../components/Protected'
import CatalogingDashboard from '../pages/Cataloging/CatalogingDashboard'
import ContributorCatalogingPage from '../pages/Cataloging/ContributorCatalogingPage'
import BookReviewPage from '../pages/Cataloging/BookReviewPage'
import InclusiveCatalogingPage from '../pages/Cataloging/InclusiveCatalogingPage'

export default function MainRouting() {
    return (
        <Routes>
        
            <Route path='/' element={<Home />} />
            
            <Route path='books' element={<Books />}>
                <Route path='quick-search' element={<QuickSearch />} />
                <Route path='advanced-search' element={<AdvancedSearch />} />
                <Route path='authors-and-illustrators' element={<AuthorsAndIllustrators />} >
                    <Route path=':id' element={<div>Individual author page</div>} />
                </Route>
                <Route path=':id' element={<Book />} />
            </Route>
            
            <Route path='about' element={<About />}>
                <Route path='cataloging-process' element={<CatalogingProcess />} />
                <Route path='smart-reading' element={<SmartReading />} />
            </Route>
            
            <Route path='accessibility' element={<Accessibility />}>
                <Route path='features' element={<Features />} />
                <Route path='feedback' element={<Feedback />} />
            </Route>
            
            <Route path='user' element={<User />}>
                <Route path='profile' element={<Profile />} />
                <Route path='my-collections' element={<MyCollections />} />
                <Route path='settings' element={<Settings />} />
            </Route>

            <Route path='cataloging'>
                <Route path='dashboard' element={<Protected><CatalogingDashboard /></Protected>} />
                <Route path='inclusive-cataloging' element={<Protected><InclusiveCatalogingPage /></Protected>} >
                    <Route path=':bookId' />
                </Route>
                <Route path ='contributor-cataloging' element={<Protected><ContributorCatalogingPage /></Protected>} />
                <Route path ='reviewing' element={<Protected><BookReviewPage /></Protected>} >
                    <Route path=':bookId' >
                        <Route path=':userId' />
                    </Route>
                </Route>
            </Route>

            <Route path='sign-in' element={<SignIn />} />

        </Routes>
    )
}