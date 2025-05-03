import React, { useState } from 'react';
import { TopBar } from '../../../../layout/AdminFlow/Topbar';
import { Navbar } from '../../../../layout/AdminFlow/Navbar';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import '../../../../styles/AdminFlow/AdminSettings/AdminPassingYearSetting.css';

const PassingYearSetting = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [years, setYears] = useState([
    { id: 1, year: '2024' },
    { id: 2, year: '2025' }
  ]);
  const [newYear, setNewYear] = useState('');
  const [editYearId, setEditYearId] = useState(null);
  const [editYear, setEditYear] = useState('');
  const [deleteYearId, setDeleteYearId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(25);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => { setIsAddModalOpen(false); setNewYear(''); };
  const openEditModal = (year) => { setEditYearId(year.id); setEditYear(year.year); setIsEditModalOpen(true); };
  const closeEditModal = () => { setIsEditModalOpen(false); setEditYearId(null); setEditYear(''); };
  const openDeleteModal = (yearId) => { setDeleteYearId(yearId); setIsDeleteModalOpen(true); };
  const closeDeleteModal = () => { setDeleteYearId(null); setIsDeleteModalOpen(false); };

  const handleSave = () => {
    if (newYear.trim() !== '') {
      const newEntry = { id: years.length + 1, year: newYear };
      setYears([...years, newEntry]);
      closeAddModal();
    }
  };

  const handleUpdate = () => {
    if (editYear.trim() !== '') {
      const updatedYears = years.map((y) => y.id === editYearId ? { ...y, year: editYear } : y);
      setYears(updatedYears);
      closeEditModal();
    }
  };

  const handleDelete = () => {
    const updatedYears = years.filter((y) => y.id !== deleteYearId);
    setYears(updatedYears);
    closeDeleteModal();
  };

  const filteredYears = years.filter((y) => y.year.includes(searchTerm)).slice(0, entriesToShow);

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="pys-page">
        <div className="pys-page-header">
          <h2>Passing Year Setting</h2>
        </div>
        <div className="pys-card">
          <div className="pys-top-controls">
            <div className="pys-left-controls">
              <div className="pys-search-box">
                <FaSearch className="pys-search-icon" />
                <input
                  type="text"
                  placeholder="Search year"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="pys-right-controls">
              <button className="pys-add-new-btn" onClick={openAddModal}>
                <FaPlus /> Add Passing Year
              </button>
              <div className="pys-entries-select">
                Show
                <select value={entriesToShow} onChange={(e) => setEntriesToShow(Number(e.target.value))}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                entries
              </div>
            </div>
          </div>

          <table className="pys-table">
            <thead>
              <tr>
                <th>SL#</th>
                <th>Passing Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredYears.map((y, index) => (
                <tr key={y.id}>
                  <td>{index + 1}</td>
                  <td>{y.year}</td>
                  <td className="pys-actions">
                    <button onClick={() => openEditModal(y)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => openDeleteModal(y.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pys-table-footer">
            <p>Showing 1 to {filteredYears.length} of {years.length} entries</p>
            <div className="pys-pagination">
              <button>{'<<'}</button>
              <button className="active">1</button>
              <button>{'>>'}</button>
            </div>
          </div>
        </div>

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="pys-modal-overlay">
            <div className="pys-modal-content">
              <div className="pys-modal-header">
                <h3>Add Passing Year</h3>
                <button className="pys-close-btn" onClick={closeAddModal}>×</button>
              </div>
              <div className="pys-modal-body">
                <div className="pys-floating-label">
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Passing Year <span className="pys-required-star">*</span></label>
                </div>
              </div>
              <div className="pys-modal-footer">
                <button className="pys-save-update-btn" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="pys-modal-overlay">
            <div className="pys-modal-content">
              <div className="pys-modal-header">
                <h3>Update Passing Year</h3>
                <button className="pys-close-btn" onClick={closeEditModal}>×</button>
              </div>
              <div className="pys-modal-body">
                <div className="pys-floating-label">
                  <input
                    type="text"
                    value={editYear}
                    onChange={(e) => setEditYear(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Passing Year <span className="pys-required-star">*</span></label>
                </div>
              </div>
              <div className="pys-modal-footer">
                <button className="pys-save-update-btn" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="pys-modal-overlay">
            <div className="pys-delete-modal-content">
              <div className="pys-modal-body">
                <div className="pys-warning-icon">!</div>
                <h3>Sure! You want to delete?</h3>
                <p>You won't be able to revert this!</p>
                <div className="pys-delete-modal-footer">
                  <button className="pys-delete-confirm-btn" onClick={handleDelete}>
                    Yes, Delete It!
                  </button>
                  <button className="pys-delete-cancel-btn" onClick={closeDeleteModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PassingYearSetting;
