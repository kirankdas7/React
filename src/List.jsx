import React from 'react'

function List() {
  return (
    <div>
        <ol>
            <li>Category A</li>
            <ul>
                <li>Subcategory A.1</li>
                <ol>
                    <li>Item A.1.1</li>
                    <li>Item A.1.2</li>

                </ol>
                <li>Sub-subcategory A.2</li>
                <ul>
                    <li>Sub-subcategory A.2.1</li>
                    <ul>
                        <li>Item A.2.1.1</li>
                        <li>Item A.2.1.2</li>

                    </ul>
                    <li>Sub-subcatgory A.2.2</li>
                    <ol>
                        <li>Item A.2.2.1</li>
                        <li>Item A.2.2.2</li>

                    </ol>
                </ul>
            </ul>
            <li>Category B</li>
            <ul>
                <li>item B.1</li>
                <li>item B.2</li>
                <li>item B.2</li>

            </ul>
            <li>Category C</li>
        </ol>
        
    </div>
  )
}

export default List