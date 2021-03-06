/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import {render} from 'react-testing-library'
import AssignmentGroup from '../AssignmentGroup'

function makeGroupList() {
  return [{lid: '1', name: 'Group 1'}, {lid: '2', name: 'Group 2'}, {lid: '3', name: 'Group 3'}]
}

it('renders the given assignment group in view mode', () => {
  const {getByText, getByTestId} = render(
    <AssignmentGroup
      mode="view"
      onChange={() => {}}
      onChangeMode={() => {}}
      assignmentGroupList={makeGroupList()}
      selectedAssignmentGroupId="2"
    />
  )
  expect(getByTestId('SelectableText')).toBeInTheDocument()
  expect(getByText('Group 2')).toBeInTheDocument()
})

it('renders the given assignment group in edit mode', () => {
  const {getByTestId} = render(
    <AssignmentGroup
      mode="edit"
      onChange={() => {}}
      onChangeMode={() => {}}
      assignmentGroupList={makeGroupList()}
      selectedAssignmentGroupId="2"
    />
  )
  expect(getByTestId('SelectableText')).toBeInTheDocument()
  expect(document.querySelector('input').value).toBe('Group 2')
})

it('renders the placeholder when not given a value', () => {
  const {getByText, getByTestId} = render(
    <AssignmentGroup mode="view" onChange={() => {}} onChangeMode={() => {}} />
  )
  expect(getByTestId('SelectableText')).toBeInTheDocument()
  expect(getByText('No Assignment Group Assigned')).toBeInTheDocument()
})
