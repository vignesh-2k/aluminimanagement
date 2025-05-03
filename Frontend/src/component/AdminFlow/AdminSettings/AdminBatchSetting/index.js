// BatchSetting.jsx
import React, { useState } from 'react';
import { TopBar } from '../../../../layout/AdminFlow/Topbar';
import { Navbar } from '../../../../layout/AdminFlow/Navbar';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
// import '../../../styles/Settings/BatchSetting.css';
import "../../../../styles/AdminFlow/AdminSettings/AdminBatchSetting.css"

const BatchSetting = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [batches, setBatches] = useState([
    { id: 1, name: 'Batch-2022' },
    { id: 2, name: 'Batch-2023' }
  ]);
  const [newBatchName, setNewBatchName] = useState('');
  const [editBatchName, setEditBatchName] = useState('');
  const [editBatchId, setEditBatchId] = useState(null);
  const [deleteBatchId, setDeleteBatchId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesToShow, setEntriesToShow] = useState(10);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => {
    setIsAddModalOpen(false);
    setNewBatchName('');
  };

  const openEditModal = (batch) => {
    setEditBatchId(batch.id);
    setEditBatchName(batch.name);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditBatchName('');
    setEditBatchId(null);
  };

  const openDeleteModal = (batchId) => {
    setDeleteBatchId(batchId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteBatchId(null);
    setIsDeleteModalOpen(false);
  };

  const handleSave = () => {
    if (newBatchName.trim() !== '') {
      const newBatch = { id: batches.length + 1, name: newBatchName };
      setBatches([...batches, newBatch]);
      closeAddModal();
    }
  };

  const handleUpdate = () => {
    if (editBatchName.trim() !== '') {
      const updatedBatches = batches.map((batch) =>
        batch.id === editBatchId ? { ...batch, name: editBatchName } : batch
      );
      setBatches(updatedBatches);
      closeEditModal();
    }
  };

  const handleDelete = () => {
    const updatedBatches = batches.filter((batch) => batch.id !== deleteBatchId);
    setBatches(updatedBatches);
    closeDeleteModal();
  };

  const filteredBatches = batches
    .filter((batch) => batch.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, entriesToShow);

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="bs-page">
        <div className="bs-page-header">
          <h2>Batch Setting</h2>
        </div>

        <div className="bs-card">
          <div className="bs-top-controls">
            <div className="bs-left-controls">
              <div className="bs-search-box">
                <FaSearch className="bs-search-icon" />
                <input
                  type="text"
                  placeholder="Search batch"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="bs-right-controls">
              <button className="bs-add-new-btn" onClick={openAddModal}>
                <FaPlus /> Add New
              </button>
              <div className="bs-entries-select">
                Show
                <select
                  value={entriesToShow}
                  onChange={(e) => setEntriesToShow(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                entries
              </div>
            </div>
          </div>

          <table className="bs-table">
            <thead>
              <tr>
                <th>SL#</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBatches.map((batch, index) => (
                <tr key={batch.id}>
                  <td>{index + 1}</td>
                  <td>{batch.name}</td>
                  <td className="bs-actions">
                    <button className="bs-edit-btn" onClick={() => openEditModal(batch)}>
                      <FaEdit />
                    </button>
                    <button className="bs-delete-btn" onClick={() => openDeleteModal(batch.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bs-table-footer">
            <p>Showing 1 to {filteredBatches.length} of {batches.length} entries</p>
            <div className="bs-pagination">
              <button>{'<<'}</button>
              <button className="active">1</button>
              <button>{'>>'}</button>
            </div>
          </div>
        </div>

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="bs-modal-overlay">
            <div className="bs-modal-content">
              <div className="bs-modal-header">
                <h3>Add Batch</h3>
                <button className="bs-close-btn" onClick={closeAddModal}>×</button>
              </div>
              <div className="bs-modal-body">
                <div className="bs-floating-label">
                  <input
                    type="text"
                    value={newBatchName}
                    onChange={(e) => setNewBatchName(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Name <span className="bs-required-star">*</span></label>
                </div>
              </div>
              <div className="bs-modal-footer">
                <button className="bs-save-update-btn" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {isEditModalOpen && (
          <div className="bs-modal-overlay">
            <div className="bs-modal-content">
              <div className="bs-modal-header">
                <h3>Update Batch</h3>
                <button className="bs-close-btn" onClick={closeEditModal}>×</button>
              </div>
              <div className="bs-modal-body">
                <div className="bs-floating-label">
                  <input
                    type="text"
                    value={editBatchName}
                    onChange={(e) => setEditBatchName(e.target.value)}
                    required
                    placeholder=" "
                  />
                  <label>Name <span className="bs-required-star">*</span></label>
                </div>
              </div>
              <div className="bs-modal-footer">
                <button className="bs-save-update-btn" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {isDeleteModalOpen && (
          <div className="bs-modal-overlay">
            <div className="bs-delete-modal-content">
              <div className="bs-modal-body">
                <div className="bs-warning-icon">!</div>
                <h3>Sure! You want to delete?</h3>
                <p>You won't be able to revert this!</p>
                <div className="bs-delete-modal-footer">
                  <button className="bs-delete-confirm-btn" onClick={handleDelete}>
                    Yes, Delete It!
                  </button>
                  <button className="bs-delete-cancel-btn" onClick={closeDeleteModal}>
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

export default BatchSetting;
